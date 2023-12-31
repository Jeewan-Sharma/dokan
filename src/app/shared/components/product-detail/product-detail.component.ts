import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.models';
import { CartService } from '../../services/cart.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  quantityForm: FormGroup;

  constructor(
    private cartService: CartService,
    private router: Router,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private toastr: ToastrService
  ) {
    this.quantityForm = new FormGroup({
      quantity: new FormControl(1),
    });
  }
  ngOnInit() {
    this.product = this.config.data;
    console.log(this.product);
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
    this.showSuccess();
  }
  showSuccess() {
    this.toastr.success('Item added to cart successfully', 'Success', {
      timeOut: 1500,
    });
  }
}
