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
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';


const primeNgModules = [
  DividerModule,
  InputMaskModule,
  CalendarModule,
  ButtonModule,
  InputTextModule,
  DialogModule,
  SidebarModule,
  DropdownModule,
]

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
