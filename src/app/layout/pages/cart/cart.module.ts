import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';

import { CartComponent } from './cart.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    TableModule,
    RatingModule,
    TagModule,
    FormsModule,
  ],
})
export class CartModule {}
