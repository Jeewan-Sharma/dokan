import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.models';
import { CartService } from '../../services/cart.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  @Input() product!: Product;
  quantityForm: FormGroup;

  constructor(private cartService: CartService) {
    this.quantityForm = new FormGroup({
      quantity: new FormControl(1),
    });
  }

  public addToCart() {
    let data = {
      id: this.product.id,
      title: this.product.title,
      image: this.product.image,
      price: this.product.price,
      quantity: this.quantityForm.value.quantity,
    };
    console.log(data);
    this.cartService.addToCart(data);
  }
}
