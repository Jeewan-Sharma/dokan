import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products!: Product[];

  constructor(private product: ProductService) {}
  ngOnInit() {
    this.product.fetchProductData().subscribe((response) => {
      this.products = response;
      console.log(this.products);
    });
  }
}
