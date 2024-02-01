import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeviceWidthService, ToastService } from '@core/services';

import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { DetailsViewComponent } from '@shared/components';
import { IProducts } from '@core/models';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, SidebarModule, InputNumberModule, ButtonModule, FormsModule, DetailsViewComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent {

  @Input() products!: IProducts[];

  detailsVisibility: boolean = false;
  selectedProduct!: IProducts;
  cartQuantity: number = 1;


  constructor(
    protected _deviceWidthService: DeviceWidthService,
    private _toastService: ToastService,
  ) { }

  get screenSize$() {
    return this._deviceWidthService.screenSize$;
  }

  addToCart() {
    this._toastService.showSuccess({
      message: "Added to cart Successfully",
    });
  }

  viewDetails(product: IProducts) {
    this.detailsVisibility = true;
    this.selectedProduct = product;
    this.cartQuantity = 1;
  }

  hideDetails() {
    this.detailsVisibility = false;
  }

}
