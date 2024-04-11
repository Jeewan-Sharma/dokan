import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EPageState } from '@core/enums';
import { IProducts } from '@core/models';
import { LoaderService, ProductsService, ToastService } from '@core/services';
import { BehaviorSubject } from 'rxjs';

interface sortType {
  name: string;
  code: string;
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  searchInput = new FormControl<string | null>(null);

  // for using value
  searchTerm: string = '';

  sortType: sortType[] = [
    { name: 'Recommended', code: 'Recommended' },
    { name: 'New Arrivals', code: 'New Arrivals' },
    { name: 'Trending', code: 'Trending' },
    { name: 'Price high to low', code: 'Price high to low' },
    { name: 'Price low to high', code: 'Price low to high' },
  ];

  selectedSortType: sortType = { name: 'Recommended', code: 'Recommended' };

  apiData: IProducts[] = [];
  searchedData: IProducts[] = [];

  readonly ePageState = EPageState;
  protected pageState$ = new BehaviorSubject<EPageState>(
    this.ePageState.DEFAULT
  );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _loaderService: LoaderService,
    private _productService: ProductsService,
    private _toastService: ToastService,
  ) { }

  ngOnInit() {
    this.filterBySearch()
    this.onSearch();
  }
  async onSearch() {
    this.searchTerm = await this._activatedRoute.snapshot.queryParams['searchTerm'];
    this.searchInput.patchValue(this.searchTerm);
  }

  async filterBySearch() {
    await this.getProductList();
    this.searchedData = await this.apiData.filter(
      (u: IProducts) => u.title.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
    if (this.searchedData.length === 0) {
      this.pageState$.next(this.ePageState.EMPTY);
    }
  }

  async getProductList() {
    try {
      this.pageState$.next(this.ePageState.LOADING);
      this._loaderService.showLoader()
      this.apiData = await this._productService.getProductList(this.searchTerm);
      this.pageState$.next(this.ePageState.SUCCESS);
    } catch (err) {
      this._toastService.showError({
        message: "Error in loading Products",
      });
      this.pageState$.next(this.ePageState.ERROR);
    }
    finally {
      this._loaderService.hideLoader();
    }
  }

}
