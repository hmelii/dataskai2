import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoFoundComponent } from './components/organisms/no-found/no-found.component';
import { ProjectEnum } from './enums/routes/project.enum';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/project/tasks',
  },
  {
    path: ProjectEnum.Project,
    loadChildren: () =>
      import('./pages/project/project-page.module').then(
        (m) => m.ProjectPageModule
      ),
    data: {
      id: 'project',
      breadcrumb: 'Project',
    },
  },
  { path: '**', component: NoFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
