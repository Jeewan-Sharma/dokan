import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ASSETS, CONFIG } from '@core/consts';
import { IShipping } from '@core/models';
import { CartService, DeviceWidthService, LoaderService, LocalHostDataService, ToastService } from '@core/services';

interface locationType {
  name: string;
  code: string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {

  readonly CONFIG = CONFIG;
  readonly ASSETS = ASSETS;

  locationType: locationType[] | undefined;

  paymentDetailForm!: FormGroup;
  shippingInformationForm!: FormGroup;

  today: Date = new Date;

  shippingInformation!: IShipping[];

  responseVisibility: boolean = false;
  shippingInfoFormVisibility: boolean = false;

  selectedShippingInfo!: IShipping;
  editShippingInformationMode: boolean = false;

  constructor(
    protected _cartService: CartService,
    public _router: Router,
    private _deviceWidthService: DeviceWidthService,
    private _loaderService: LoaderService,
    private _localHostDataService: LocalHostDataService,
    private _toastService: ToastService,
  ) { }

  async ngOnInit() {
    await this.initForm();
    await this.getData();
    this.locationType = [
      { name: 'Home', code: 'Home' },
      { name: 'Work', code: 'Work' },
      { name: 'Elsewhere', code: 'Elsewhere' }
    ];
  }

  async getData() {
    this.shippingInformation = await this._localHostDataService.getShippingInfo();
  }

  initForm() {
    this.paymentDetailForm = new FormGroup({
      nameInCard: new FormControl<string | null>(null, [Validators.required]),
      cardNumber: new FormControl<number | null>(null, [Validators.required]),
      expiryDate: new FormControl<Date | null>(null, [Validators.required]),
      cvc: new FormControl<number | null>(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(3)]),
    });

    this.shippingInformationForm = new FormGroup(
      {
        locationType: new FormControl<locationType | null>(null, [Validators.required]),
        firstName: new FormControl<string | null>(null, [Validators.required]),
        lastName: new FormControl<string | null>(null, [Validators.required]),
        phone: new FormControl<string | null>(null, [Validators.required]),
        address: new FormControl<string | null>(null, [Validators.required]),
        postalCode: new FormControl<number | null>(null, [Validators.required]),

      }
    )
  }
  get screenSize$() {
    return this._deviceWidthService.screenSize$;
  }

  checkout() {
    if (this.paymentDetailForm.invalid) {
      this.paymentDetailForm.markAllAsTouched();
      return
    } else if (this.selectedShippingInfo == null) {
      this._toastService.showError({ message: "select Shipping Information" })
    }
    else {
      this._cartService.clearCartProducts();
      this.responseVisibility = true;
    }
  }

  navigateToHome() {
    this._router.navigateByUrl('')
  }

  openShippingInfoForm() {
    this.shippingInfoFormVisibility = true;
  }

  closeShippingInfoForm() {
    this.shippingInfoFormVisibility = false;
  }

  async addShippingInfo() {
    try {
      if (this.shippingInformationForm.invalid) {
        this.shippingInformationForm.markAllAsTouched();
        return;
      }
      this._loaderService.showLoader()
      const credentialState: IShipping = {
        locationType: this.shippingInformationForm.controls['locationType'].value.name,
        firstName: this.capitalizeFirstLetter(this.shippingInformationForm.controls['firstName'].value),
        lastName: this.capitalizeFirstLetter(this.shippingInformationForm.controls['lastName'].value),
        phone: this.shippingInformationForm.controls['phone'].value,
        address: this.shippingInformationForm.controls['address'].value,
        postalCode: this.shippingInformationForm.controls['postalCode'].value,
      };

      const res = await this._localHostDataService.addShippingInfo(credentialState);

      if (res) {
        this._toastService.showSuccess({
          message: "Information Added Successfully",
        });
        this.shippingInfoFormVisibility = false;
        this.getData()
      } else {
        this._toastService.showError({
          message: "Error in adding Information",
        });
      }
    } catch (e) {
      this._toastService.showError({
        message: "Error in adding Information",
      });
    } finally {
      this._loaderService.hideLoader()
    }
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  selectShippingInfo(info: IShipping) {
    this.selectedShippingInfo = info;
  }

  editShippingInformation(info: IShipping) {
    // IShipping to form to match dropdown value
    const value = {
      locationType: {
        name: info.locationType,
        code: info.locationType,
      },
      firstName: info.firstName,
      lastName: info.lastName,
      address: info.address,
      postalCode: info.postalCode,
      phone: info.phone,
    }

    this.shippingInformationForm.patchValue(value);
    this.editShippingInformationMode = true;
    this.shippingInfoFormVisibility = true;
  }

  async deleteShippingInfo() {
    const res = await this._localHostDataService.deleteShippingInfo(this.selectedShippingInfo);
    if (res) {
      this.getData();
    } else {
      this._toastService.showError({
        message: "Error in Information Deletion",
      });
    }
    this.shippingInfoFormVisibility = false;
  }

  onFormClose() {
    const value = {
      locationType: {
        name: null,
        code: null,
      },
      firstName: null,
      lastName: null,
      address: null,
      postalCode: null,
      phone: null
    };
    this.shippingInformationForm.patchValue(value);
    this.editShippingInformationMode = false;
  }

  saveEdited() {
    this.shippingInfoFormVisibility = false;
  }

}
