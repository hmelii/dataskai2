import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModule } from '../../../../../../../../main.module';
import { ComparisonPageRoutingModule } from './comparison-page-routing.module';
import { ComparisonPageComponent } from './comparison-page.component';
import { ComparisonComponent } from '../../../../../../../../components/organisms/comparison/comparison.component';

@NgModule({
  declarations: [ComparisonPageComponent, ComparisonComponent],
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
export class ComparisonPageModule {}
