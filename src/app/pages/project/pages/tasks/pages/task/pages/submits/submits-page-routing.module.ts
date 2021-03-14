import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmitsPageComponent } from './submits-page.component';

const routes: Routes = [
  {
    path: '',
    component: SubmitsPageComponent,
  },
  {
    path: ':submitID',
    component: SubmitsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmitsPageRoutingModule {
  constructor() {}
}
