import { Component, OnInit } from '@angular/core';
import { ASSETS } from '@core/consts';
import { EPageState } from '@core/enums';
import { IProducts } from '@core/models';
import { DeviceWidthService, LoaderService, ToastService, ProductsService } from '@core/services';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  readonly ASSETS = ASSETS;

  readonly ePageState = EPageState;
  protected pageState$ = new BehaviorSubject<EPageState>(
    this.ePageState.DEFAULT
  );

  apiData: IProducts[] = [];
  searchedInputResult: string = '';

  constructor(
    protected _deviceWidthService: DeviceWidthService,
    private _loaderService: LoaderService,
    private _productService: ProductsService,
    private _toastService: ToastService,
  ) { }

  async ngOnInit() {
    await this.getProductList()
  }

  async getProductList() {
    try {
      this.pageState$.next(this.ePageState.LOADING);
      this._loaderService.showLoader()
      this.apiData = await this._productService.getProductList(this.searchedInputResult ? this.searchedInputResult : '');
      if (this.apiData.length === 0) {
        this.pageState$.next(this.ePageState.EMPTY);
      }
      else {
        this.pageState$.next(this.ePageState.SUCCESS);
      }
    } catch (err) {
      this.pageState$.next(this.ePageState.ERROR);
      this._toastService.showError({
        message: "Error in loading Products",
      });
    }
    finally {
      this._loaderService.hideLoader();
    }
  }


}
