import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitsPageComponent } from './submits-page.component';
import { SubmitsPageRoutingModule } from './submits-page-routing.module';
import { SubmitsComponent } from '../../../../../../../../components/organisms/submits/submits.component';

import { MainModule } from '../../../../../../../../main.module';

@NgModule({
  declarations: [SubmitsPageComponent, SubmitsComponent],
  imports: [SubmitsPageRoutingModule, CommonModule, MainModule],
  exports: [
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
