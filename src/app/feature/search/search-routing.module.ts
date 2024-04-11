import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchRootComponent } from './components/search-root/search-root.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchRootComponent,
    children: [
      {
        path: '',
        component: SearchComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
