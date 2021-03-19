import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { ProjectNameComponent } from './components/molecules/project-name/project-name.component';
import { ThemesSwitcherComponent } from './components/molecules/themes-switcher/themes-switcher.component';
import { MainTaskTabsComponent } from './components/molecules/main-task-tabs/main-task-tabs.component';
import { ProjectPageModule } from './pages/project/project-page.module';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { NoFoundComponent } from './components/organisms/no-found/no-found.component';
import { HttpClientModule } from '@angular/common/http';
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
import { StorageModule } from './storage/storage.module';
@NgModule({
  declarations: [AppComponent, NoFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProjectPageModule,
    StorageModule.forRoot(),

    // SubmitsModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
