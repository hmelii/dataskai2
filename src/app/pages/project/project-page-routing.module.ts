import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectPageComponent } from './project-page.component';
import { TasksEnum } from '../../enums/routes/tasks.enum';

const routes: Routes = [
  {
    path: '',
    component: ProjectPageComponent,
  },
  {
    path: TasksEnum.Tasks,
    loadChildren: () =>
      import('./pages/tasks/tasks-page.module').then((m) => m.TasksPageModule),
    data: {
      id: 'projectTasks',
      breadcrumb: 'tasks',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectPageRoutingModule {
  constructor() {}
}
