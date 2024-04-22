import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchRootComponent } from './components/search-root/search-root.component';
import { SearchComponent } from './components/search/search.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { DividerModule } from 'primeng/divider';
import { ListProductsComponent, LoadingListComponent, DetailsViewComponent, ErrorOnLoadComponent, EmptyListComponent } from '@shared/components';

const PrimeNgModules = [InputGroupModule, ButtonModule, InputTextModule, DropdownModule, SliderModule, DividerModule]

@NgModule({
  declarations: [
    SearchRootComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    PrimeNgModules,
    ReactiveFormsModule,
    FormsModule,
    ListProductsComponent,
    LoadingListComponent,
    DetailsViewComponent,
    ErrorOnLoadComponent,
    EmptyListComponent
  ]
})
export class SearchModule { }
