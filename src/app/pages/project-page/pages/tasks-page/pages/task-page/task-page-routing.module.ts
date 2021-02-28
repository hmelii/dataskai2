import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskPageComponent } from './task-page.component';
import { TaskEnum } from '../../../../../../enums/routes/task.enum';

const routes: Routes = [
  {
    path: '',
    component: TaskPageComponent,
  },
  {
    path: TaskEnum.Submits,
    loadChildren: () =>
      import('./pages/submits-page/submits-page.module').then(
        (m) => m.SubmitsPageModule
      ),
    data: {
      id: 'projectTaskSubmits',
      breadcrumb: 'submits',
    },
  },
  {
    path: TaskEnum.Info,
    loadChildren: () =>
      import('./pages/info-page/info-page.module').then(
        (m) => m.InfoPageModule
      ),
    data: {
      id: 'projectTaskInfo',
      breadcrumb: 'info',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskPageRoutingModule {
  constructor() {}
}
