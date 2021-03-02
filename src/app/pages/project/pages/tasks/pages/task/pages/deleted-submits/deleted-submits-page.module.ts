import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedSubmitsPageComponent } from './deleted-submits-page.component';
import { DeletedSubmitsPageRoutingModule } from './deleted-submits-page-routing.module';
import { DeletedSubmitsComponent } from '../../../../../../../../components/organisms/deleted-submits/deleted-submits.component';

import { MainModule } from '../../../../../../../../main.module';

@NgModule({
  declarations: [DeletedSubmitsPageComponent, DeletedSubmitsComponent],
  imports: [DeletedSubmitsPageRoutingModule, CommonModule, MainModule],
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
export class DeletedSubmitsPageModule {}
