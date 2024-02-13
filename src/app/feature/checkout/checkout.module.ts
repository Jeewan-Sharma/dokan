import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutRootComponent } from './components/checkout-root/checkout-root.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';

import { DividerModule } from 'primeng/divider';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

const primeNgModules = [DividerModule, InputMaskModule, CalendarModule, ButtonModule, InputTextModule]

@NgModule({
  declarations: [CheckoutRootComponent, CheckoutComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    primeNgModules,
    ReactiveFormsModule
  ]
})
export class CheckoutModule { }
