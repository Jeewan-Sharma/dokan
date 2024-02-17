import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ASSETS } from "@core/consts";
import { IRememberMeData } from '@core/models';
import { CartService, DeviceWidthService, LocalHostDataService } from '@core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Output() onCartClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onFavoritesClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  readonly ASSETS = ASSETS;

  menuVisibility: boolean = false;
  loginCredential!: IRememberMeData;
  loginStatus: boolean = false;

  constructor(
    public _router: Router,
    protected _deviceWidthService: DeviceWidthService,
    protected _cartService: CartService,
    private _localHostDataService: LocalHostDataService,
  ) { }

  ngOnInit(): void {
    this.getLoginStatus()
  }

  async getLoginStatus() {
    this.loginCredential = await this._localHostDataService.getLoginStatusAndCredential();
    this.loginStatus = this.loginCredential.loginStatus;
  }

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

  async logout() {
    try {
      const res = await this._localHostDataService.setLogoutStatus()
      if (res) {
        this._router.navigate(['/auth'])
      }
    } catch (e) {
      throw e
    }
  }

  routeToLogin() {
    this._router.navigate(['/auth'])
  }
}
