import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, throwError } from 'rxjs';
import { HttpService } from '@core/services';
import { API_URL } from '@core/consts';
import { IProducts } from '@core/models'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpService) { }

  getProductList(searchKeyword: string): Promise<IProducts[]> {
    return firstValueFrom(
      this._http.get(API_URL.PRODUCTS.GET_PRODUCTS_LIST(searchKeyword)).pipe(
        catchError(error => {
          console.error('Error fetching product list:', error);
          return throwError(() => error);
        })
      ))
  }
  // on case of custom API IApiResponse is returned for ease of error handling
  // getProductList(searchKeyword: string): Promise<IApiResponse> {
  //   return firstValueFrom(
  //     this._http.get(API_URL.PRODUCTS.GET_PRODUCTS_LIST(searchKeyword)))
  // }
}
