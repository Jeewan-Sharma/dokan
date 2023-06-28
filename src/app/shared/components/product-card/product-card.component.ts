import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.models';
import { CartService } from '../../services/cart.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  constructor(
    private cartService: CartService,
    private router: Router,
    private dialogService: DialogService
  ) {}
  @Input() product!: Product;

  public visible: boolean = false;
  public showDialog() {
    // this.visible = true;
    const ref = this.dialogService.open(ProductDetailComponent, {
      header: 'Product Details',
      width: '70%',
      closable: true,
      showHeader: true,
      dismissableMask: true,
      styleClass: 'your-dialog-style-class',
      data: this.product,
    });
  }

  public addToCart() {
    let data = {
      id: this.product.id,
      title: this.product.title,
      image: this.product.image,
      price: this.product.price,
      quantity: 1,
    };
    console.log(data);
    this.cartService.addToCart(data);
    // swal fire
    Swal.fire({
      title: 'Added to Cart',
      text: 'Item has been added to your cart.',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Go to Cart',
      cancelButtonText: 'OK',
      timer: 5000,
      timerProgressBar: true,
    }).then((result) => {
      if (result.value) {
        // User clicked "Go to Cart" button, perform the routing
        // Make sure to import the Router module and inject it into the constructor
        this.router.navigate(['/cart']);
      }
    });
  }
}
