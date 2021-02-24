import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NoFoundComponent } from "./components/no-found/no-found.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/project/tasks/123/submits'
  },
  {
    path: 'project',
    component: MainLayoutComponent,
    loadChildren: () => import('./pages/project-page/project-page.module').then(m => m.ProjectPageModule),
    data: {
      breadcrumb: 'Project'
    }
  },
  {path: '**', component: NoFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
