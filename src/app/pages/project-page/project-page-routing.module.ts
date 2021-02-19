import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectPageComponent } from "./project-page.component";

const routes: Routes = [
  {
    path: '',
    component: ProjectPageComponent
  },
  {
    path: 'tasks',
    loadChildren: () => import('./pages/tasks-page/tasks-page.module').then(m => m.TasksPageModule),
    data: {
      breadcrumb: 'tasks'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectPageRoutingModule  {
    constructor() {
    }
}
