import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRootComponent } from './components/auth-root/auth-root.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthRootComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      { path: '**', pathMatch: 'full', redirectTo: 'login' },
      { path: '', pathMatch: 'full', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
