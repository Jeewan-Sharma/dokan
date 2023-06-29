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
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // Item already exists in the cart, update the quantity
      existingItem.quantity += item.quantity;
    } else {
      // Item does not exist in the cart, add it
      cartItems.push(item);
    }

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
