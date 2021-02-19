import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
