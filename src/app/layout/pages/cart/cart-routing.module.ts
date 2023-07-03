import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { preventCheckoutGuard } from 'src/app/shared/guards/prevent-checkout.guard';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
  },
  {
    path: 'check-out',
    loadChildren: () =>
      import('src/app/layout/pages/checkout/checkout.module').then(
        (m) => m.CheckoutModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
