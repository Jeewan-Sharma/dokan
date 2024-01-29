import { Injectable } from '@angular/core';
import { ApiService } from '@core/services'
import { EHttpResponseCode } from '@core/enums';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _apiService: ApiService) { }

  getProductList(searchKeyword: string) {
    return new Promise<any[] | []>(async (resolve, reject) => {
      try {
        const res = await this._apiService.getProductList(searchKeyword);
        if (res.statuscode === EHttpResponseCode.GET_SUCCESS) {
          return resolve(res?.body);
        } else {
          throw new Error();
        }
      } catch (err) {
        return reject(false);
      }
    });
  }

}
