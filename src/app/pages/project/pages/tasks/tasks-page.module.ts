import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageComponent } from './tasks-page.component';
import { TasksPageRoutingModule } from './tasks-page-routing.module';
import { MainModule } from '../../../../main.module';
import { ProjectComponent } from '../../../../components/organisms/project/project.component';

@NgModule({
  declarations: [TasksPageComponent, ProjectComponent],
  imports: [CommonModule, TasksPageRoutingModule, MainModule],
  exports: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TasksPageModule {}
