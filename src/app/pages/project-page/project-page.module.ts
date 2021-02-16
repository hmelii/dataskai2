import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from "./project-page.component";
import { ProjectPageRoutingModule } from "./project-page-routing.module";
import { FiltersPanelComponent } from "../../components/filters-panel/filters-panel.component";
import { AuthorsFilterComponent } from "../../components/authors-filter/authors-filter.component";
import { SearchComponent } from "../../components/search/search.component";
import { ContentComponent } from "../../components/content/content.component";
import { IconComponent } from '../../components/icon/icon.component';
import { TableComponent } from "../../components/table/table.component";
import { DynamicsComponent } from "../../components/dynamics/dynamics.component";



@NgModule({
  declarations: [
    ProjectPageComponent,
    FiltersPanelComponent,
    AuthorsFilterComponent,
    SearchComponent,
    ContentComponent,
    IconComponent,
    TableComponent,
    DynamicsComponent

  ],
  imports: [
    CommonModule,
    ProjectPageRoutingModule,
    // AppModule,

  ],
  exports: [
    ProjectPageComponent,
    FiltersPanelComponent,
    AuthorsFilterComponent,
    ContentComponent,
    SearchComponent,
    IconComponent,
    TableComponent,
    DynamicsComponent

  ]
})
export class ProjectPageModule { }
