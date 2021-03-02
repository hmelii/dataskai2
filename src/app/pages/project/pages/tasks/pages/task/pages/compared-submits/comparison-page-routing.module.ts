import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComparedSubmitsPageComponent } from './compared-submits-page.component';

const routes: Routes = [
  {
    path: '',
    component: ComparedSubmitsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComparisonPageRoutingModule {
  constructor() {}
}
