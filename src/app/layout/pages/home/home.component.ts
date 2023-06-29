import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product.models';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public products!: Product[];
  public searchTerm: string = '';
  public visible: boolean = false;

  constructor(
    private product: ProductService,
    private ngxSpinnerService: NgxSpinnerService
  ) {}
  ngOnInit() {
    this.ngxSpinnerService.show();
    this.product.fetchProductData().subscribe((response) => {
      this.products = response;
      console.log(this.products);
      this.ngxSpinnerService.hide();
    });
  }
  showDialog() {
    this.visible = true;
  }
}
