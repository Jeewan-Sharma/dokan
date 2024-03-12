import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthRootComponent } from './components/auth-root/auth-root.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { SidebarModule } from 'primeng/sidebar';


const PrimeNgModules = [InputTextModule, CheckboxModule, DialogModule, SidebarModule, ButtonModule, InputMaskModule]


@NgModule({
  declarations: [
    AuthRootComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    PrimeNgModules,
    LoaderComponent,
  ]
})
export class AuthModule { }
