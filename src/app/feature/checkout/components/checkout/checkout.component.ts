import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CONFIG } from '@core/consts';
import { CartService } from '@core/services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {

  readonly CONFIG = CONFIG;
  paymentDetailForm!: FormGroup;

  today: Date = new Date;

  constructor(
    protected _cartService: CartService,
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

  checkout() {

  }

}
