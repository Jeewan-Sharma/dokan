import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { UnderDevelopmentComponent } from 'src/app/shared/components/under-development/under-development.component';
import { preventCheckoutGuard } from 'src/app/shared/guards/prevent-checkout.guard';

const routes: Routes = [
  {
    path: 'success',
    component: UnderDevelopmentComponent,
    canActivate: [preventCheckoutGuard],
  },
  {
    path: '',
    component: CheckoutComponent,
    canActivate: [preventCheckoutGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
