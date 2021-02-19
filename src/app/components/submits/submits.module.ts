import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconSpriteModule } from "ng-svg-icon-sprite";

import { FiltersPanelComponent } from "../filters-panel/filters-panel.component";
import { TableComponent } from "../table/table.component";
import { SubmitsComponent } from "./submits.component";
import { AuthorsFilterComponent } from "../authors-filter/authors-filter.component";
import { SearchComponent } from "../search/search.component";
import { ContentComponent } from "../content/content.component";
// import { IconComponent } from "../icon/icon.component";
import { DynamicsComponent } from "../dynamics/dynamics.component";
import { LoaderComponent } from "../loader/loader.component";
import { ProjectPageModule } from "../../pages/project-page/project-page.module";




@NgModule({
  declarations: [
    /*FiltersPanelComponent,
    TableComponent,*/
    SubmitsComponent,
    // AuthorsFilterComponent,
    // SearchComponent,
    // ContentComponent,
    // IconComponent,
    // DynamicsComponent,
    // LoaderComponent,

  ],
  imports: [
    CommonModule,
    ProjectPageModule,
    // IconSpriteModule,
    // AppModule,

  ],
  exports: [
    // FiltersPanelComponent,
    // TableComponent,
    SubmitsComponent,
    // AuthorsFilterComponent,
    // SearchComponent,
    // ContentComponent,
    // IconComponent,
    // DynamicsComponent,
    // LoaderComponent,



  ]
})
export class SubmitsModule { }
