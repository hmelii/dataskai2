import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModule } from '../../../../../../../../main.module';
import { ComparisonPageRoutingModule } from './comparison-page-routing.module';
import { ComparedSubmitsPageComponent } from './compared-submits-page.component';
import { ComparedSubmitsComponent } from '../../../../../../../../components/organisms/compared-submits/compared-submits.component';

@NgModule({
  declarations: [ComparedSubmitsPageComponent, ComparedSubmitsComponent],
  imports: [ComparisonPageRoutingModule, CommonModule, MainModule],
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
export class ComparedSubmitsPageModule {}
