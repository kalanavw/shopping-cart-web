import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddNewItemComponent} from './pages/add-new-item/add-new-item.component';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add-new-item',
    component: AddNewItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
