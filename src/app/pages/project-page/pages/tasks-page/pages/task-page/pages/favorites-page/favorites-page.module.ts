import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModule } from '../../../../../../../../main.module';
import { FavoritesPageRoutingModule } from './favorites-page-routing.module';
import { FavoritesPageComponent } from './favorites-page.component';
import { FavoritesComponent } from '../../../../../../../../components/organisms/favorites/favorites.component';

@NgModule({
  declarations: [FavoritesPageComponent, FavoritesComponent],
  imports: [FavoritesPageRoutingModule, CommonModule, MainModule],
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
export class FavoritesPageModule {}
