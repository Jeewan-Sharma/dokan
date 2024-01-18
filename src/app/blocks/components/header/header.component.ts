import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ASSETS } from "@core/consts";
import { DeviceWidthService } from '@core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  readonly ASSETS = ASSETS

  menuVisibility: boolean = false

  constructor(public _router: Router, protected _deviceWidthService: DeviceWidthService) { }
  cartClicked() { }
  favouritesClicked() { }
  openSideMenu() {
    this.menuVisibility = true;
  }
  closeSidebar() {
    this.menuVisibility = false
  }
}
