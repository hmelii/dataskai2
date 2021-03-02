import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteSubmitsPageComponent } from './favorite-submits-page.component';

const routes: Routes = [
  {
    path: '',
    component: FavoriteSubmitsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteSubmitsPageRoutingModule {
  constructor() {}
}
