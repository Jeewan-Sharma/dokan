import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeRootComponent } from './components/home-root/home-root.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [HomeRootComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
  ]
})
export class HomeModule { }
