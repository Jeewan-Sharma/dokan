import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [LayoutComponent, NavBarComponent, FooterComponent],
  imports: [CommonModule, LayoutRoutingModule, MenubarModule, SharedModule],
})
export class LayoutModule {}
