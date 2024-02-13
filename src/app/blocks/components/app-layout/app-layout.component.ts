import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceWidthService } from '@core/services';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

  cartVisibility: boolean = false;

  constructor(
    protected _deviceWidthService: DeviceWidthService,
    private _router: Router,
  ) { }

  get screenSize$() {
    return this._deviceWidthService.screenSize$;
  }

  showCart() {
    this.cartVisibility = true;
  }

  proceedToCheckout() {
    this.cartVisibility = false;
    this._router.navigate(["/checkout"]);
  }


}
