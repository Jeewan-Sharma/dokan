import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CartProduct } from 'src/app/shared/models/cartProduct.models';
import { Product } from 'src/app/shared/models/product.models';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  // @Input() product!: Product;
  public visible: boolean = false;

  userForm: FormGroup;
  products!: CartProduct[];
  sum!: number;
  constructor(private cartService: CartService) {
    this.userForm = new FormGroup({
      firstName: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ])
      ),
      lastName: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ])
      ),
      address1: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ])
      ),
      address2: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ])
      ),

      phone: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          this.mobileNumberValidator(),
        ])
      ),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(5),
          Validators.maxLength(254),
        ])
      ),
      bankName: new FormControl(
        '',
        Validators.compose([Validators.required, this.bankNameValidator()])
      ),
      cardNumber: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(15),
        ])
      ),
      cvcNumber: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
        ])
      ),
    });
  }
  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.products = items;
    });
    console.log(this.products);
    this.calculateSum();
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
  public showDialog() {
    this.visible = true;
  }
  public hideDialog() {
    this.visible = false;
  }
  confirmCheckout() {
    let a = {
      product: { ...this.products },
      inputs: { ...this.userForm.value },
    };
    console.log(a);
  }
  private calculateSum() {
    if (this.products && this.products.length > 0) {
      this.sum = this.products.reduce(
        (total, product) => total + product.price * Number(product.quantity),
        0
      );
      console.log(this.sum);
    } else {
      this.sum = 0;
    }
  }
  // getter for easy access to form fields
  get f() {
    return this.userForm.controls;
  }

  // error message for error validation
  getErrorMessage(controlName: string) {
    const control = this.userForm.get(controlName);
    if (control?.hasError('required')) {
      return 'You must enter a value';
    }

    // email
    if (control?.hasError('email')) {
      return 'Not a valid email';
    }
    if (
      controlName == 'email' &&
      control?.hasError('minlength' || 'maxlength')
    ) {
      return 'email should contain 5 to 254 characters';
    }
    // mobile number
    // invalid mobile Number
    if (control?.hasError('invalidMobileNumber')) {
      return 'Not a valid Mobile Number';
    }
    // invalid Country Code

    if (control?.hasError('invalidMobileNumberCountryCode')) {
      return 'Invalid Country Code; Start with 98';
    }
    if (
      controlName == 'phone' &&
      (control?.hasError('minlength') || control?.hasError('maxlength'))
    ) {
      return 'Phone Number should contain 10 digits';
    }
    //
    if (
      controlName == 'cardNumber' &&
      (control?.hasError('minlength') || control?.hasError('maxlength'))
    ) {
      return 'Card Number should contain 15 digits';
    }

    if (
      controlName == 'cvcNumber' &&
      (control?.hasError('minlength') || control?.hasError('maxlength'))
    ) {
      return 'CVC Number should contain 3 digits';
    }
    // for custom
    if (control?.hasError('invalidBankName')) {
      return 'Not a valid Bank name';
    }
    return '';
  }
  // custom Validators
  mobileNumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const mobileNumberRegex = /^[0-9]+$/; // Only allows digits
      const isValid = mobileNumberRegex.test(control.value);

      // Country Code Check
      if (isValid) {
        const mobileNumber = control.value as string;
        if (!mobileNumber.startsWith('98')) {
          return { invalidMobileNumberCountryCode: true };
        }
      }
      return isValid ? null : { invalidMobileNumber: true };
    };
  }
  // Custom validator function for full name
  bankNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const bankNameRegex = /^[a-zA-Z\s]+$/; // Only allows alphabets and spaces
      const bankName = control.value ? control.value.trim() : '';
      const names = bankName.split(' ');
      const isValid =
        names.length >= 2 &&
        names.every((name: any) => bankNameRegex.test(name));
      return isValid ? null : { invalidBankName: true };
    };
  }
}
