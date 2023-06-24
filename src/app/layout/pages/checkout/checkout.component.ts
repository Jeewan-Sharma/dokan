import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address_1: new FormControl(''),
      address_2: new FormControl(''),
      city: new FormControl(''),
      zipCode: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      bankName: new FormControl(''),
      branchName: new FormControl(''),
      cardNumber: new FormControl(''),
      cvcNumber: new FormControl(''),
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}
