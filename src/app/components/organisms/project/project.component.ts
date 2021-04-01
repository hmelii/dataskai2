import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../services/authors/authors.service';
import { ProjectService } from '../../../services/project/project.service';
import { TaskService } from '../../../services/task/task.service';
import { TaskInterface } from '../../../interfaces/task/task.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MainEnum } from '../../../enums/routes/main.enum';
import { ProjectEnum } from '../../../enums/routes/project.enum';
import { TaskEnum } from '../../../enums/routes/task.enum';
import { TasksEnum } from '../../../enums/routes/tasks.enum';
import { TableColSortingInterface } from '../../../interfaces/table-col-sorting/table-col-sorting.interface';
import { ProjectConfigDataColumnInterface } from '../../../interfaces/project/project.interface';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projectTasks: TaskInterface[] = null;
  error = null;
  projectInfo = null;
  taskInfo = null;
  projectConfigColumns: ProjectConfigDataColumnInterface[] = null;
  currentPage = null;
  totalPages = null;
  rows: number[] = null;
  rowsDefault: number;
  routeTaskID = null;
  routeSubmitID = null;
  sortColumn = null;
  sortOrder = null;
  searchMatches = null;
  startIndex = 1;
  oldProjectMeta = null;

  routeSubmits = TaskEnum.Submits;
  routeTasks = TasksEnum.Tasks;
  routeProject = ProjectEnum.Project;
  routeMain = MainEnum.Self;

  constructor(
    private authorsService: AuthorsService,
    private projectService: ProjectService,
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.subscribeRouteUpdates();
    this.subscribeProjectInfoUpdates();
    this.subscribeProjectConfigUpdates();
    this.subscribeProjectTasksUpdates();
    this.subscribeProjectMetaOldUpdates();
    this.subscribeProjectMetaUpdates();
  }

  ngOnInit(): void {}

  subscribeRouteUpdates() {
    this.activatedRoute.queryParams.subscribe(({ page = 1 }) => {
      this.currentPage = page;
    });
  }

  subscribeProjectInfoUpdates() {
    this.projectService.currentProjectInfoStageMessage.subscribe(
      ({ loaded, loading, data }) => {
        if (!loaded && !loading) {
          this.projectService.getProjectInfo();
        }

        if (loaded && !loading) {
          if (data) {
            this.projectInfo = data;
          }
        }
      }
    );
  }

  compare(a, b) {
    // вынести в pipe
    if (a.index < b.index) {
      return -1;
    }
    if (a.index > b.index) {
      return 1;
    }
    return 0;
  }

  subscribeProjectConfigUpdates() {
    this.projectService.currentProjectConfigStageMessage.subscribe(
      ({ loaded, loading, data }) => {
        if (!loaded && !loading) {
          this.projectService.getProjectConfig();
        }

        if (loaded && !loading) {
          if (data) {
            this.projectConfigColumns = data.columns.sort(this.compare);
            // this.rowsDefault = data.rows_per_page_default;
            this.rows = data.rows_per_page_values;
            this.updateStartIndex();
          }
        }
      }
    );
  }

  subscribeProjectTasksUpdates() {
    this.projectService.currentProjectTasksStageMessage.subscribe(
      ({ loaded, loading, data, meta }) => {
        if (!loaded && !loading) {
          this.getProjectTasks();
        }

        if (loaded && !loading) {
          if (data) {
            this.projectTasks = data.tasks;
          }
          if (meta) {
            const {
              sort_column = null,
              sort_order = null,
              total_pages = 1,
              current_page = 1,
              search_matches = null,
              per_page,
            } = meta;
            this.sortColumn = sort_column;
            this.sortOrder = sort_order;
            this.totalPages = total_pages;
            this.currentPage = current_page;
            this.searchMatches = search_matches;
            this.rowsDefault = per_page;
            this.updateStartIndex();
          }
        }
      }
    );
  }

  updateStartIndex() {
    if (this.currentPage && this.rowsDefault) {
      this.startIndex = (this.currentPage - 1) * this.rowsDefault + 1;
    }
  }

  changeProjectTasksRoute() {
    const routeMain = MainEnum.Self;
    const routeProject = ProjectEnum.Project;
    const routeTasks = TasksEnum.Tasks;

    this.router.navigate([`${routeMain}${routeProject}/${routeTasks}`], {
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge',
    });
  }

  subscribeProjectMetaOldUpdates() {
    this.projectService.currentProjectMetaPrevStageMessage.subscribe(
      (projectMeta) => {
        this.oldProjectMeta = projectMeta;
      }
    );
  }

  subscribeProjectMetaUpdates() {
    this.projectService.currentProjectMetaStageMessage.subscribe(
      (projectMeta) => {
        const { authors: prevAuthors = '' } = this.oldProjectMeta;
        const {
          authors = '',
          per_page = null,
          sort_order = this.sortOrder,
          sort_column = this.sortColumn,
        } = projectMeta;

        if (
          authors !== prevAuthors ||
          per_page != null ||
          sort_order !== this.sortOrder ||
          sort_column !== this.sortColumn
        ) {
          this.currentPage = 1;
          this.getProjectTasks();
        }
      }
    );
  }

  handlePageChange(currentPage) {
    if (this.currentPage !== currentPage) {
      this.currentPage = currentPage;
      this.changeProjectTasksRoute();
      this.getProjectTasks();
    }
  }

  getProjectTasks() {
    this.projectService.getProjectTasks({ start_page: this.currentPage });
  }

  handleSortChange({ sortOrder, colID }: TableColSortingInterface) {
    console.log('sortOrder', sortOrder);
    console.log('colID', colID);

    this.projectService.updateProjectMetaMessage({
      sort_order: sortOrder,
      sort_column: colID,
    });
  }

  handleRowsChanged($event: number) {
    this.projectService.updateProjectMetaMessage({ per_page: $event });
  }
}
