import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  fetchProductData(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
