import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  constructor(private cartService: CartService) {}
  @Input() product!: Product;

  public visible: boolean = false;
  public showDialog() {
    this.visible = true;
  }
  public addToCart() {
    this.cartService.addToCart(this.product);
  }
}
