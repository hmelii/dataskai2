import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeletedSubmitsPageComponent } from './deleted-submits-page.component';

const routes: Routes = [
  {
    path: '',
    component: DeletedSubmitsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletedSubmitsPageRoutingModule {
  constructor() {}
}
