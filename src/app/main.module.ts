import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { LogoComponent } from './components/atoms/logo/logo.component';
import { ProjectNameComponent } from './components/molecules/project-name/project-name.component';
import { ThemesSwitcherComponent } from './components/molecules/themes-switcher/themes-switcher.component';
import { TaskMainTabsComponent } from './components/molecules/task-main-tabs/task-main-tabs.component';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { FiltersPanelComponent } from './components/molecules/filters-panel/filters-panel.component';

import { ProjectAuthorsFilterComponent } from './components/molecules/authors-filter/project-authors-filter/project-authors-filter.component';
import { TaskAuthorsFilterComponent } from './components/molecules/authors-filter/task-authors-filter/task-authors-filter.component';

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
import { TableTagsComponent } from './components/molecules/table-tags/table-tags.component';
import { TableModalComponent } from './components/molecules/table-modal/table-modal.component';
import { ReplaceLineBreaks } from './pipes/replace-line-breaks.pipe';
import { ReplaceTabs } from './pipes/replace-tabs.pipe';
import { MatchesIsHiddenPipe } from './pipes/matches-is-hidden.pipe';
import { TableActionsComponent } from './components/molecules/table-actions/table-actions.component';
import { TableFeaturesComponent } from './components/molecules/table-features/table-features.component';
import { TableTaskNameComponent } from './components/molecules/table-task-name/table-task-name.component';
import { TableMetricListComponent } from './components/molecules/table-metric-list/table-metric-list.component';
import { FormatNumberPipe } from './pipes/format-number.pipe';
import { TableMetricServiceStatusComponent } from './components/molecules/table-metric-service-status/table-metric-service-status.component';
import { ProjectMainTabsComponent } from './components/molecules/project-main-tabs/project-main-tabs.component';
import { FormsModule } from '@angular/forms';
import { AutofocusDirective } from './directives/autofocus/autofocus.directive';
import { ComparisonTableMetricComponent } from './components/molecules/comparison-table-metric/comparison-table-metric.component';
import { ComparisonTableSelectBaselineComponent } from './components/molecules/comparison-table-select-baseline/comparison-table-select-baseline.component';
import { ComparisonTableRemoveFormComparisonComponent } from './components/molecules/comparison-table-remove-form-comparison/comparison-table-remove-form-comparison.component';
import { TableDragNDropDirective } from './directives/table-drag-n-drop/table-drag-n-drop.directive';
import { EventsBubbleComponent } from './components/molecules/events-bubble/events-bubble.component';

@NgModule({
  declarations: [
    ProjectNameComponent,
    FiltersPanelComponent,
    ProjectAuthorsFilterComponent,
    TaskAuthorsFilterComponent,

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
    TaskMainTabsComponent,
    ProjectMainTabsComponent,
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
    TableTagsComponent,
    TableModalComponent,
    ReplaceLineBreaks,
    ReplaceTabs,
    MatchesIsHiddenPipe,
    TableActionsComponent,
    TableFeaturesComponent,
    TableTaskNameComponent,
    TableMetricListComponent,
    FormatNumberPipe,
    TableMetricServiceStatusComponent,
    AutofocusDirective,
    TableDragNDropDirective,
    ComparisonTableMetricComponent,
    ComparisonTableSelectBaselineComponent,
    ComparisonTableRemoveFormComparisonComponent,
    EventsBubbleComponent,
  ],
  imports: [
    IconSpriteModule,
    CommonModule,
    ProjectPageRoutingModule,
    ClickOutsideModule,
    FormsModule,
    // SubmitsModule,
  ],
  providers: [],
  exports: [
    ProjectNameComponent,
    FiltersPanelComponent,
    ProjectAuthorsFilterComponent,
    TaskAuthorsFilterComponent,

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
    TaskMainTabsComponent,
    ProjectMainTabsComponent,
    PaginationComponent,
    MainComponent,
    MainLayoutComponent,
    LangsSwitcherComponent,
    SubmitsFilterComponent,
    CommentsInSubmitsComponent,
    MetricServiceInSubmitsComponent,
    TableColSwitcherComponent,
    TableModalComponent,
    ComparisonTableMetricComponent,
    TableActionsComponent,
    TableAttachmentsComponent,
    TableTagsComponent,
    ComparisonTableSelectBaselineComponent,
    ComparisonTableRemoveFormComparisonComponent,
    TableFeaturesComponent,
    EventsBubbleComponent,
    TableDragNDropDirective,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MainModule {}
