import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from 'src/app/shared/pipe/search-filter.pipe';

@NgModule({
  declarations: [HomeComponent, SearchFilterPipe],
  imports: [CommonModule, HomeRoutingModule, SharedModule, FormsModule],
})
export class HomeModule {}
