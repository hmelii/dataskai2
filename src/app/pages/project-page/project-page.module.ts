import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from "./project-page.component";
import { ProjectPageRoutingModule } from "./project-page-routing.module";
// import { FiltersPanelComponent } from "../../components/filters-panel/filters-panel.component";
// import { AuthorsFilterComponent } from "../../components/authors-filter/authors-filter.component";
import { SearchComponent } from "../../components/search/search.component";
import { ContentComponent } from "../../components/content/content.component";
import { IconComponent } from '../../components/icon/icon.component';
// import { TableComponent } from "../../components/table/table.component";
import { DynamicsComponent } from "../../components/dynamics/dynamics.component";
import { LoaderComponent } from '../../components/loader/loader.component';
import { IconSpriteModule } from "ng-svg-icon-sprite";
import { SubmitsComponent } from "../../components/submits/submits.component";
import { FiltersPanelComponent } from "../../components/filters-panel/filters-panel.component";
import { TableComponent } from "../../components/table/table.component";
import { MetaPanelComponent } from "../../components/meta-panel/meta-panel.component";
import { AuthorsFilterComponent } from "../../components/authors-filter/authors-filter.component";
import { RowPerPageComponent } from "../../components/row-per-page/row-per-page.component";
import { SelectComponent } from "../../components/select/select.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";
import { TaskInfoComponent } from "../../components/task-info/task-info.component";



@NgModule({
  declarations: [
    ProjectPageComponent,
    // FiltersPanelComponent,
    AuthorsFilterComponent,

    ContentComponent,
    IconComponent,
    SubmitsComponent,
    TaskInfoComponent,

    FiltersPanelComponent,
    TableComponent,
    MetaPanelComponent,
    // TableComponent,
    SearchComponent,
    RowPerPageComponent,
    SelectComponent,
    PaginationComponent,
    // DynamicsComponent,
    LoaderComponent,
    // MetaPanelComponent,


  ],
  imports: [
    CommonModule,
    ProjectPageRoutingModule,
    IconSpriteModule,
    // SubmitsModule,

    // AppModule,

  ],
  exports: [
    ProjectPageComponent,
    // FiltersPanelComponent,
    AuthorsFilterComponent,
    ContentComponent,
    SubmitsComponent,
    SearchComponent,
    IconComponent,
    // TableComponent,

    // DynamicsComponent,
    LoaderComponent,
    PaginationComponent,
    FiltersPanelComponent,
    TaskInfoComponent,

    // MetaPanelComponent,


  ]
})
export class ProjectPageModule { }
