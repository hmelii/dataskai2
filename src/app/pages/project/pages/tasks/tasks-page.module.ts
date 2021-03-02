import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageComponent } from './tasks-page.component';
import { TasksPageRoutingModule } from './tasks-page-routing.module';

@NgModule({
  declarations: [TasksPageComponent],
  imports: [CommonModule, TasksPageRoutingModule],
  exports: [],
})
export class TasksPageModule {}
