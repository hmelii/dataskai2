import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPageComponent } from './task-page.component';
import { TaskPageRoutingModule } from './task-page-routing.module';

@NgModule({
  declarations: [TaskPageComponent],
  imports: [CommonModule, TaskPageRoutingModule],
  exports: [],
})
export class TaskPageModule {}
