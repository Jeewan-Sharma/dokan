import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocksRoutingModule } from './blocks-routing.module';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SmallDeviceMenuComponent } from './components/small-device-menu/small-device-menu.component';

import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppLayoutComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    SmallDeviceMenuComponent
  ],
  imports: [
    CommonModule,
    BlocksRoutingModule,
    ToastModule,
  ]
})
export class BlocksModule { }
