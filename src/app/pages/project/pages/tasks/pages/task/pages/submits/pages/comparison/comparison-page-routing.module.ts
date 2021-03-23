import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComparisonPageComponent } from './comparison-page.component';
import { TaskEnum } from '../../../../../../../../../../enums/routes/task.enum';

const routes: Routes = [
  {
    path: '',
    component: ComparisonPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComparisonPageRoutingModule {
  constructor() {}
}
