import { Routes } from '@angular/router';
import { AppLayoutComponent } from './blocks/components/app-layout/app-layout.component';
import { authGuard, preventAuthGuard } from '@core/guards';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./feature/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'checkout',
        loadChildren: () => import('./feature/checkout/checkout.module').then((m) => m.CheckoutModule),
        canActivate: [authGuard]
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./feature/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [preventAuthGuard]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
  { path: '', pathMatch: 'full', redirectTo: '' }
];
