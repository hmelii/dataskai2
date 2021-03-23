import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmitsPageComponent } from './submits-page.component';
import { TaskEnum } from '../../../../../../../../enums/routes/task.enum';

const routes: Routes = [
  {
    path: '',
    component: SubmitsPageComponent,
  },
  {
    path: TaskEnum.ComparedSubmits,
    loadChildren: () =>
      import('./pages/comparison/comparison-page.module').then(
        (m) => m.ComparisonPageModule
      ),
    data: {
      id: 'projectTaskComparedSubmits',
      breadcrumb: 'comparises submits',
    },
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
