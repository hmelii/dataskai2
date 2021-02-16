import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/project'
  },
  {
    path: 'project',
    component: MainLayoutComponent,
    loadChildren: () => import('./pages/project-page/project-page.module').then(m => m.ProjectPageModule),
    data: {
      breadcrumb: 'Project'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
