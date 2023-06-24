import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { UnderDevelopmentComponent } from './components/under-development/under-development.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { DialogModule } from 'primeng/dialog';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    UnderDevelopmentComponent,
    AnnouncementComponent,
    ProductDetailComponent,
    // SearchFilterPipe,
  ],
  imports: [CommonModule, DialogModule],
  exports: [
    ProductCardComponent,
    UnderDevelopmentComponent,
    AnnouncementComponent,
  ],
})
export class SharedModule {}
