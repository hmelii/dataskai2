import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { LogoComponent } from './components/atoms/logo/logo.component';
import { ProjectNameComponent } from './components/molecules/project-name/project-name.component';
import { ThemesSwitcherComponent } from './components/molecules/themes-switcher/themes-switcher.component';
import { MainTabsComponent } from './components/molecules/main-tabs/main-tabs.component';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { FiltersPanelComponent } from './components/molecules/filters-panel/filters-panel.component';
import { AuthorsFilterComponent } from './components/molecules/authors-filter/authors-filter.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { SearchComponent } from './components/molecules/search/search.component';
import { FeaturesInfoComponent } from './components/organisms/features-info/features-info.component';
import { TableComponent } from './components/molecules/table/table.component';
import { MetaPanelComponent } from './components/molecules/meta-panel/meta-panel.component';
import { RowPerPageComponent } from './components/molecules/row-per-page/row-per-page.component';
import { SelectComponent } from './components/atoms/select/select.component';
import { LoaderComponent } from './components/atoms/loader/loader.component';
import { TaskSelectionComponent } from './components/molecules/task-selection/task-selection.component';
import { HeaderComponent } from './layouts/blocks/header/header.component';
import { MainComponent } from './layouts/blocks/main/main.component';
import { PaginationComponent } from './components/molecules/pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ProjectPageRoutingModule } from './pages/project-page/project-page-routing.module';
@NgModule({
  declarations: [
    ProjectNameComponent,
    FiltersPanelComponent,
    AuthorsFilterComponent,
    IconComponent,
    SearchComponent,
    FeaturesInfoComponent,
    TableComponent,
    MetaPanelComponent,
    RowPerPageComponent,
    SelectComponent,
    LoaderComponent,
    TaskSelectionComponent,
    HeaderComponent,
    // MainLayoutComponent,
    LogoComponent,
    ThemesSwitcherComponent,
    MainTabsComponent,
    PaginationComponent,
    MainComponent,
    MainLayoutComponent,
  ],
  imports: [
    IconSpriteModule,
    CommonModule,
    ProjectPageRoutingModule,
    // SubmitsModule,
  ],
  providers: [],
  exports: [
    ProjectNameComponent,
    FiltersPanelComponent,
    AuthorsFilterComponent,
    IconComponent,
    SearchComponent,
    FeaturesInfoComponent,
    TableComponent,
    MetaPanelComponent,
    RowPerPageComponent,
    SelectComponent,
    LoaderComponent,
    TaskSelectionComponent,
    HeaderComponent,
    // MainLayoutComponent,
    LogoComponent,
    ThemesSwitcherComponent,
    MainTabsComponent,
    PaginationComponent,
    MainComponent,
    MainLayoutComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MainModule {}
