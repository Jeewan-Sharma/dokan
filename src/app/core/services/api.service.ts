import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@core/services';
import { API_URL } from '@core/consts';
import { IApiResponse } from '@core/models'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpService) { }

  getProductList(searchKeyword: string): Promise<IApiResponse> {
    return firstValueFrom(
      this._http.get(API_URL.PRODUCTS.GET_PRODUCTS_LIST(searchKeyword)))
  }
}
