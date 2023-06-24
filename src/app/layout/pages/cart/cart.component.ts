import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/shared/models/cartProduct.models';
import { CartService } from 'src/app/shared/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products!: CartProduct[];
  sum!: number;
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.products = items;
    });
    console.log(this.products);
    this.calculateSum();
  }
  public removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.calculateSum();
  }

  private calculateSum() {
    if (this.products && this.products.length > 0) {
      this.sum = this.products.reduce(
        (total, product) => total + product.price * Number(product.quantity),
        0
      );
      console.log(this.sum);
    } else {
      this.sum = 0;
    }
  }
}
