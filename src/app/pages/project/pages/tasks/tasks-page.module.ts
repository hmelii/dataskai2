import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageComponent } from './tasks-page.component';
import { TasksPageRoutingModule } from './tasks-page-routing.module';
import { MainModule } from '../../../../main.module';
import { TasksComponent } from '../../../../components/organisms/tasks/tasks.component';

@NgModule({
  declarations: [TasksPageComponent, TasksComponent],
  imports: [CommonModule, TasksPageRoutingModule, MainModule],
  exports: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TasksPageModule {}
