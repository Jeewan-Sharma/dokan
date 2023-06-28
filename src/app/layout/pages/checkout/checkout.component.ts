import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartProduct } from 'src/app/shared/models/cartProduct.models';
import { Product } from 'src/app/shared/models/product.models';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  // @Input() product!: Product;
  public visible: boolean = false;

  userForm: FormGroup;
  products!: CartProduct[];
  sum!: number;
  constructor(private cartService: CartService) {
    this.userForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address1: new FormControl(''),
      address2: new FormControl(''),
      city: new FormControl(''),
      zipCode: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      bankName: new FormControl(''),
      cardNumber: new FormControl(''),
      cvcNumber: new FormControl(''),
    });
  }
  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.products = items;
    });
    console.log(this.products);
    this.calculateSum();
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
  public showDialog() {
    this.visible = true;
  }
  public hideDialog() {
    this.visible = false;
  }
  confirmCheckout() {
    let a = {
      product: { ...this.products },
      inputs: { ...this.userForm.value },
    };
    console.log(a);
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
