import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout.component';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ReactiveFormsModule,
    DialogModule,
    TableModule,
    MatInputModule,
  ],
})
export class CheckoutModule {}
