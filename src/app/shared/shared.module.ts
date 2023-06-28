import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { UnderDevelopmentComponent } from './components/under-development/under-development.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  providers: [DialogService],

  declarations: [
    ProductCardComponent,
    UnderDevelopmentComponent,
    AnnouncementComponent,
    ProductDetailComponent,
  ],
  imports: [CommonModule, DialogModule, ReactiveFormsModule],
  exports: [
    ProductCardComponent,
    UnderDevelopmentComponent,
    AnnouncementComponent,
    ProductDetailComponent,
  ],
})
export class SharedModule {}
