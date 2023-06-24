import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.models';
import { CartService } from 'src/app/shared/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products!: Product[];
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.products = items;
    });
    console.log(this.products);
  }
  public removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
  }
}
