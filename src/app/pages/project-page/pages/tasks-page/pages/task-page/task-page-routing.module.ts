import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskPageComponent } from "./task-page.component";

const routes: Routes = [
  {
    path: '',
    component: TaskPageComponent
  },
  {
    path: 'submits',
    loadChildren: () => import('./pages/submits-page/submits-page.module').then(m => m.SubmitsPageModule),
    data: {
      breadcrumb: 'submits'
    }
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info-page/info-page.module').then(m => m.InfoPageModule),
    data: {
      breadcrumb: 'info'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskPageRoutingModule {
  constructor() {
  }
}
