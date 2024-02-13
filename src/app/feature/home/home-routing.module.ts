import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeRootComponent } from './components/home-root/home-root.component';

const routes: Routes = [
  {
    path: '',
    component: HomeRootComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
