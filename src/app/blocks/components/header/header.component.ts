import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ASSETS } from "@core/consts";
import { CartService, DeviceWidthService } from '@core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() onCartClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onFavoritesClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  readonly ASSETS = ASSETS;

  menuVisibility: boolean = false;

  constructor(
    public _router: Router,
    protected _deviceWidthService: DeviceWidthService,
    protected _cartService: CartService,
  ) { }

  cartClicked() {
    this.onCartClicked.emit(true);
  }

  favoritesClicked() {
    this.onFavoritesClicked.emit(true);
  }

  openSideMenu() {
    this.menuVisibility = true;
  }
  closeSidebar() {
    this.menuVisibility = false;
  }
}
