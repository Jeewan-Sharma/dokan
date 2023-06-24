import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { UnderDevelopmentComponent } from './components/under-development/under-development.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';

@NgModule({
  declarations: [
    ProductCardComponent,
    UnderDevelopmentComponent,
    AnnouncementComponent,
    // SearchFilterPipe,
  ],
  imports: [CommonModule],
  exports: [
    ProductCardComponent,
    UnderDevelopmentComponent,
    AnnouncementComponent,
  ],
})
export class SharedModule {}
