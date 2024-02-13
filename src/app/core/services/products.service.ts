import { Injectable } from '@angular/core';
import { ApiService } from '@core/services'
import { EHttpResponseCode } from '@core/enums';
import { IProducts } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _apiService: ApiService) { }

  getProductList(searchKeyword: string) {
    return new Promise<IProducts[] | []>(async (resolve, reject) => {
      try {
        const res = await this._apiService.getProductList(searchKeyword);
        return resolve(res)
        // on case of Custom API we get response of IResponse so this step is necessary
        // if (res.statuscode === EHttpResponseCode.GET_SUCCESS) {
        //   return resolve(res?.body);
        // } else {
        //   throw new Error();
        // }
      } catch (err) {
        return reject(false);
      }
    });
  }

}
