import { Component, OnInit } from '@angular/core';
import { ASSETS } from '@core/consts';
import { EPageState } from '@core/enums';
import { DeviceWidthService, LoaderService } from '@core/services';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  readonly ASSETS = ASSETS;
  readonly EPageState = EPageState;
  pageState: EPageState = EPageState.LOADING;

  apiData: any[] = [];
  searchedInputResult: string = '';

  constructor(
    protected _deviceWidthService: DeviceWidthService,
    private _loaderService: LoaderService,
    private _productService: ProductsService
  ) { }

  async ngOnInit() {
    await this.getProductList()
  }

  async getProductList() {
    try {
      this._loaderService.showLoader()
      this.apiData = await this._productService.getProductList(this.searchedInputResult ? this.searchedInputResult : '');
      if (this.apiData.length === 0) {
        this.pageState = EPageState.EMPTY;
      }
      else {
        this.pageState = EPageState.SUCCESS;
      }
    } catch (err) {
      // this._toastService.showError({
      //   message: STRINGS.IMAGEFINDER.GET_IMAGELIST_FAILED,
      // });
      this.pageState = EPageState.ERROR;
    }
    finally {
      this._loaderService.hideLoader();
    }
  }


}
