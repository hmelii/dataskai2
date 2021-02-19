import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksPageComponent } from "./tasks-page.component";
import { TaskPageComponent } from "./pages/task-page/task-page.component";
import { MainLayoutComponent } from "../../../../layouts/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '',
    component: TasksPageComponent
  },
  {
    path: ':id',
    loadChildren: () => import('./pages/task-page/task-page.module').then(m => m.TaskPageModule),
    data: {
      breadcrumb: 'task'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksPageRoutingModule {
    constructor() {
    }
}
