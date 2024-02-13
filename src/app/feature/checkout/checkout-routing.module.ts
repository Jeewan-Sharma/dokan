import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutRootComponent } from './components/checkout-root/checkout-root.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutRootComponent,
    children: [
      {
        path: '',
        component: CheckoutComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
