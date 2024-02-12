import { Component } from '@angular/core';
import { DeviceWidthService } from '@core/services';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

  cartVisibility: boolean = false;

  constructor(protected _deviceWidthService: DeviceWidthService) { }

  get screenSize$() {
    return this._deviceWidthService.screenSize$;
  }

  showCart() {
    this.cartVisibility = true;
  }

  proceedToCheckout() { }


}
