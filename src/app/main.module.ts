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
import { ProjectPageRoutingModule } from './pages/project/project-page-routing.module';
import { LangsSwitcherComponent } from './components/molecules/langs-switcher/langs-switcher.component';
import { CheckboxComponent } from './components/atoms/checkbox/checkbox/checkbox.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { AddToComparisonComponent } from './components/molecules/add-to-comparison/add-to-comparison.component';
import { TableCopyUrlComponent } from './components/molecules/table-copy-url/table-copy-url.component';
import { AddToBasketComponent } from './components/molecules/add-to-basket/add-to-basket.component';
import { DynamicsComponent } from './components/molecules/dynamics/dynamics.component';
import { FavoriteComponent } from './components/atoms/favorite/favorite.component';
import { SubmitsFilterComponent } from './components/molecules/submits-filter/submits-filter.component';
import { MetricServiceInSubmitsComponent } from './components/molecules/metric-service-in-submits/metric-service-in-submits.component';
import { CommentsInSubmitsComponent } from './components/molecules/comments-in-submits/comments-in-submits.component';
import { TableColSwitcherComponent } from './components/molecules/table-col-switcher/table-col-switcher.component';
import { TableAttachmentsComponent } from './components/molecules/table-attachments/table-attachments.component';
import { TableColSortingComponent } from './components/molecules/table-col-sorting/table-col-sorting.component';
import { TableMetricComponent } from './components/molecules/table-metric/table-metric.component';
import { TableFeatureMiningCommentsComponent } from './components/molecules/table-feature-mining-comments/table-feature-mining-comments.component';
import { TableModalComponent } from './components/molecules/table-modal/table-modal.component';
import { ReplaceLineBreaks } from './pipes/replace-line-breaks.pipe';
import { ReplaceTabs } from './pipes/replace-tabs.pipe';
import { MatchesIsHiddenPipe } from './pipes/matches-is-hidden.pipe';
import { TableActionsComponent } from './components/molecules/table-actions/table-actions.component';
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
    LangsSwitcherComponent,
    CheckboxComponent,
    AddToComparisonComponent,
    TableCopyUrlComponent,
    AddToBasketComponent,
    DynamicsComponent,
    FavoriteComponent,
    SubmitsFilterComponent,
    MetricServiceInSubmitsComponent,
    CommentsInSubmitsComponent,
    TableColSwitcherComponent,
    TableAttachmentsComponent,
    TableColSortingComponent,
    TableMetricComponent,
    TableFeatureMiningCommentsComponent,
    TableModalComponent,
    ReplaceLineBreaks,
    ReplaceTabs,
    MatchesIsHiddenPipe,
    TableActionsComponent,
  ],
  imports: [
    IconSpriteModule,
    CommonModule,
    ProjectPageRoutingModule,
    ClickOutsideModule,
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
    LangsSwitcherComponent,
    SubmitsFilterComponent,
    CommentsInSubmitsComponent,
    MetricServiceInSubmitsComponent,
    TableColSwitcherComponent,
    TableModalComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MainModule {}
