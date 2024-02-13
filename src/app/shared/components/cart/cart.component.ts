import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService, DeviceWidthService, ToastService } from '@core/services';
import { ButtonModule } from 'primeng/button';
import { ASSETS, CONFIG } from '@core/consts';
import { ICart, IProducts } from '@core/models';

import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider';

const primeNgModules = [DialogModule, SidebarModule, InputNumberModule, ButtonModule, DividerModule];

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, primeNgModules, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  readonly ASSETS = ASSETS;
  readonly CONFIG = CONFIG;

  confirmVisibility: boolean = false;

  selectedProduct!: ICart;

  cartProducts$ = this._cartService.cartProducts$;

  constructor(
    protected _deviceWidthService: DeviceWidthService,
    protected _cartService: CartService,
    private _toastService: ToastService
  ) { }

  get screenSize$() {
    return this._deviceWidthService.screenSize$;
  }

  valueChanged() {
    this._cartService.changeValue()
  }

  openDeleteDialog(product: any) {
    this.selectedProduct = product
    this.confirmVisibility = true
  }

  async confirmDelete(selectedProduct: IProducts) {
    const res = await this._cartService.removeProductFromCart(selectedProduct);
    if (res) {
      this._toastService.showSuccess({
        message: `${selectedProduct.title} Removed from cart Successfully`,
      });
      this.confirmVisibility = false;
    } else {
      this._toastService.showSuccess({
        message: "Error in removing form cart",
      });
    }
  }

  cancelDelete() {
    this.confirmVisibility = false;
  }

}
