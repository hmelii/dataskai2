import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPageComponent } from './info-page.component';
import { InfoPageRoutingModule } from './info-page-routing.module';
import { MainModule } from '../../../../../../../../main.module';
import { TaskInfoComponent } from '../../../../../../../../components/molecules/task-info/task-info.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [InfoPageComponent, TaskInfoComponent],
  imports: [
    //SubmitsModule,
    CommonModule,
    InfoPageRoutingModule,
    MainModule,
    MarkdownModule.forRoot(),
  ],
  exports: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class InfoPageModule {}
