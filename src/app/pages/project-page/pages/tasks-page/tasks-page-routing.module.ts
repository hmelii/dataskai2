import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksPageComponent } from './tasks-page.component';
import { TaskEnum } from '../../../../enums/routes/task.enum';

const routes: Routes = [
  {
    path: '',
    component: TasksPageComponent,
  },
  {
    path: TaskEnum.Self,
    loadChildren: () =>
      import('./pages/task-page/task-page.module').then(
        (m) => m.TaskPageModule
      ),
    data: {
      id: 'projectTask',
      breadcrumb: 'task',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksPageRoutingModule {
  constructor() {}
}
