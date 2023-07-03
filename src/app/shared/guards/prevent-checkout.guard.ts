import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CartProduct } from '../models/cartProduct.models';

export const preventCheckoutGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const cart = cartValue();
  console.log(cart[0].length);
  if (cart[0].length > 0) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};

function cartValue() {
  const cartService = inject(CartService);
  const products: any[] = [];
  const cart = cartService.cartItems$.subscribe((items) => {
    products.push(items);
  });
  return products;
}
