import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./pages/cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'check-out',
        loadChildren: () =>
          import('./pages/checkout/checkout.module').then(
            (m) => m.CheckoutModule
          ),
      },
      {
        path: 'product-detail',
        loadChildren: () =>
          import('./pages/product-detail/product-detail.module').then(
            (m) => m.ProductDetailModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
