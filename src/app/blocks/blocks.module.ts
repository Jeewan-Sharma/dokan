import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksRoutingModule } from './blocks-routing.module';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';

import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { SidebarModule } from 'primeng/sidebar'
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { ToastComponent } from './components/toast/toast.component';

const primengModules = [
  ToastModule,
  ProgressSpinnerModule,
  SidebarModule,
  InputGroupModule,
  InputTextModule,
  ButtonModule,
  BadgeModule
]

@NgModule({
  declarations: [
    AppLayoutComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    AnnouncementComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    BlocksRoutingModule,
    primengModules,
  ]
})
export class BlocksModule { }
