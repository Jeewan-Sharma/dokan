import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { ICart, IProducts } from '@core/models';
import { CONFIG } from '@core/consts';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  readonly CONFIG = CONFIG;

  private cartProductsSubject: BehaviorSubject<ICart[]> = new BehaviorSubject<ICart[]>(this.getInitialCartProducts());
  cartProducts$: Observable<ICart[]> = this.cartProductsSubject.asObservable();
  totalItems$!: Observable<number>;
  totalAmount$!: Observable<number>;
  discountAmount$!: Observable<number>;
  totalSum$!: Observable<number>;

  constructor() {
    this.calculateSums();
  }

  private getInitialCartProducts(): ICart[] {
    const storedJSON = localStorage.getItem('DokanCartProducts');
    return storedJSON ? JSON.parse(storedJSON) : [];
  }

  async addToCart(product: IProducts, quantityToAdd: number): Promise<boolean> {
    try {
      const storedJSON = localStorage.getItem('DokanCartProducts');
      const storedRestaurantData: ICart[] = storedJSON ? JSON.parse(storedJSON) : [];
      const existingProductIndex = storedRestaurantData.findIndex(i => i.id === product.id);
      if (existingProductIndex === -1) {
        storedRestaurantData.push({
          category: product.category,
          description: product.description,
          id: product.id,
          image: product.image,
          price: product.price,
          rating: product.rating,
          title: product.title,
          quantity: quantityToAdd,
        });
      } else {
        storedRestaurantData[existingProductIndex].quantity += quantityToAdd;
      }
      const newDataJSON = JSON.stringify(storedRestaurantData);
      localStorage.setItem('DokanCartProducts', newDataJSON);
      this.cartProductsSubject.next(storedRestaurantData);
      return true;
    } catch (e) {
      return false;
    }
  }

  removeProductFromCart(product: IProducts): Promise<boolean> {
    try {
      const storedJSON = localStorage.getItem('DokanCartProducts');
      if (storedJSON) {
        const storedCartProducts: ICart[] = JSON.parse(storedJSON);
        const updatedCartProducts = storedCartProducts.filter(item => item.id !== product.id);
        this.cartProductsSubject.next(updatedCartProducts);
        localStorage.setItem('DokanCartProducts', JSON.stringify(updatedCartProducts));
        return Promise.resolve(true);
      } else {
        return Promise.reject(false);
      }
    } catch (error) {
      return Promise.reject(false);
    }
  }

  changeValue() {
    this.calculateSums()
    localStorage.setItem('DokanCartProducts', JSON.stringify(this.cartProductsSubject.value));
  }

  clearCartProducts() {
    localStorage.setItem('DokanCartProducts', '');
    this.cartProductsSubject.next([]);
  }

  calculateSums() {
    this.totalItems$ = this.cartProducts$.pipe(
      map(products => products.reduce((total, product) => total + product.quantity, 0))
    );

    this.totalAmount$ = this.cartProducts$.pipe(
      map(products => products.reduce((total, product) => total + (product.price * product.quantity), 0))
    );

    this.discountAmount$ = this.totalAmount$.pipe(
      map(total => total * CONFIG.DISCOUNT_PERCENTAGE / 100)
    );

    const shippingCharge = 0;

    if (this.cartProducts$)

      this.totalSum$ = combineLatest([this.totalAmount$, this.discountAmount$]).pipe(
        map(([totalAmount, discountAmount]) => {
          let shippingCharge = 0;
          if (this.cartProducts$) {
            const productsCount = this.cartProductsSubject.value.length;
            shippingCharge = productsCount > 1 ? CONFIG.SHIPPING_FEE : 0;
          }
          return totalAmount - discountAmount + shippingCharge
        })
      );
  }

}
