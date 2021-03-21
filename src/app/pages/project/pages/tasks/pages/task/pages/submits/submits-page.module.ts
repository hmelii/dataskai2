import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitsPageComponent } from './submits-page.component';
import { SubmitsPageRoutingModule } from './submits-page-routing.module';
import { TaskComponent } from '../../../../../../../../components/organisms/task/task.component';

import { MainModule } from '../../../../../../../../main.module';

@NgModule({
  declarations: [SubmitsPageComponent, TaskComponent],
  imports: [SubmitsPageRoutingModule, CommonModule, MainModule],
  exports: [
    TaskComponent,
    //SubmitsPageComponent,
    //FeaturesInfoComponent,
    // SubmitsComponent,
    //TableComponent,
    //MetaPanelComponent,
    //RowPerPageComponent,
    //SelectComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SubmitsPageModule {}
