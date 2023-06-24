import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(item: any) {
    const cartItems = this.cartItemsSubject.value;
    cartItems.push(item);
    this.cartItemsSubject.next(cartItems);
  }

  removeFromCart(item: any) {
    const cartItems = this.cartItemsSubject.value;
    const index = cartItems.indexOf(item);
    if (index > -1) {
      cartItems.splice(index, 1);
      this.cartItemsSubject.next(cartItems);
    }
  }

  getCartItems(): any[] {
    return this.cartItemsSubject.value;
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }
}
