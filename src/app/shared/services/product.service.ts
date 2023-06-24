import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public url: string = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) {}

  fetchProductData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  fetchProductDataById(productId: number): Observable<Product> {
    let newURl = `${this.url}/${productId}`;
    return this.http.get<Product>('https://fakestoreapi.com/products/1');
  }
}
