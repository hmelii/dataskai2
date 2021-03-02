import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModule } from '../../../../../../../../main.module';
import { FavoriteSubmitsPageRoutingModule } from './favorite-submits-page-routing.module';
import { FavoriteSubmitsPageComponent } from './favorite-submits-page.component';
import { FavoriteSubmitsComponent } from '../../../../../../../../components/organisms/favorite-submits/favorite-submits.component';

@NgModule({
  declarations: [FavoriteSubmitsPageComponent, FavoriteSubmitsComponent],
  imports: [FavoriteSubmitsPageRoutingModule, CommonModule, MainModule],
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
export class FavoriteSubmitsPageModule {}
