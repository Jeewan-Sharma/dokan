import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { TableModule } from 'primeng/table';

import { CartComponent } from './cart.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, TableModule, FormsModule],
})
export class CartModule {}
