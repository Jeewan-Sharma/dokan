import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ASSETS, CONFIG } from '@core/consts';
import { CartService, DeviceWidthService } from '@core/services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {

  readonly CONFIG = CONFIG;
  readonly ASSETS = ASSETS;
  paymentDetailForm!: FormGroup;

  today: Date = new Date;
  responseVisibility: boolean = false;

  constructor(
    protected _cartService: CartService,
    public _router: Router,
    private _deviceWidthService: DeviceWidthService,
  ) { }

  async ngOnInit() {
    await this.initForm();
  }

  initForm() {
    this.paymentDetailForm = new FormGroup({
      nameInCard: new FormControl<string | null>(null, [Validators.required]),
      cardNumber: new FormControl<number | null>(null, [Validators.required]),
      expiryDate: new FormControl<Date | null>(null, [Validators.required]),
      cvc: new FormControl<number | null>(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(3)]),
    });
  }
  get screenSize$() {
    return this._deviceWidthService.screenSize$;
  }

  checkout() {
    if (this.paymentDetailForm.invalid) {
      this.paymentDetailForm.markAllAsTouched();
      return
    } else {
      this._cartService.clearCartProducts();
      this.responseVisibility = true;
    }
  }

  navigateToHome() {
    this._router.navigateByUrl('')
  }
}
