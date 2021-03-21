import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../services/authors/authors.service';
import { ProjectService } from '../../../services/project/project.service';
import { TaskService } from '../../../services/task/task.service';
import {
  TaskConfigColumnInterface,
  TaskConfigInterface,
  TaskSubmitsInterface,
} from '../../../interfaces/task/task.interface';
import { SubmitInterface } from '../../../interfaces/submit/submit.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MainEnum } from '../../../enums/routes/main.enum';
import { ProjectEnum } from '../../../enums/routes/project.enum';
import { TaskEnum } from '../../../enums/routes/task.enum';
import { TasksEnum } from '../../../enums/routes/tasks.enum';
import { TableColSortingInterface } from '../../../interfaces/table-col-sorting/table-col-sorting.interface';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  loading = {
    projectInfo: false,
    taskInfo: false,
    config: false,
  };

  loaded = {
    projectInfo: false,
    taskInfo: false,
    config: false,
  };

  taskSubmits: SubmitInterface[] = null;
  error = null;
  projectInfo = null;
  taskInfo = null;
  taskConfigColumns: TaskConfigColumnInterface[] = null;
  currentPage = null;
  totalPages = null;
  rows: number[] = null;
  rowsDefault: number;
  routeTaskID = null;
  routeSubmitID = null;
  sortColumn = null;
  sortOrder = null;
  searchMatches = null;

  constructor(
    private authorsService: AuthorsService,
    private projectService: ProjectService,
    private taskService: TaskService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.subscribeSubmitsUpdates();
    this.subscribeTaskConfigUpdates();
    this.subscribeRouteUpdate();
    this.subscribeProjectInfoUpdates();
    this.subscribeTaskInfoUpdates();
  }

  ngOnInit(): void {}

  subscribeRouteUpdate() {
    this.activateRoute.params.subscribe((params) => {
      this.routeTaskID = params['taskID'];
      this.routeSubmitID = params['submitID']; // используется для перехода по ссылке Например: http://localhost/project/tasks/aero__fw_clf_v1__ENG_1_FUEL_FILTER_CLOG__21/submits/6017b6b376a8c74ef40b1247d6

      this.getTaskInfo();
      this.getTaskSubmits();
    });
  }

  subscribeTaskConfigUpdates() {
    this.taskService.currentTaskConfigStageMessage.subscribe(
      (taskConfig: TaskConfigInterface) => {
        const { loaded, loading, data } = taskConfig;

        if (!loaded && !loading) {
          this.taskService.getTaskConfig();
        }

        if (loaded && !loading) {
          if (data) {
            this.taskConfigColumns = taskConfig.data.columns;
            this.rows = taskConfig.data.rows_per_page_values;
            this.rowsDefault = taskConfig.data.rows_per_page_default;
          }
        }
      }
    );
  }

  subscribeSubmitsUpdates() {
    this.taskService.currentTaskSubmitsStageMessage.subscribe(
      ({ loaded, loading, data, meta }) => {
        if (!loaded && !loading) {
          this.taskService.getTaskSubmits();
        }

        if (loaded && !loading) {
          if (data) {
            const { submits = [] } = data;
            this.taskSubmits = submits;
          }
          if (meta) {
            const {
              current_page = 1,
              total_pages = 1,
              sort_column = null,
              sort_order = null,
              search_matches = null,
            } = meta;
            this.currentPage = current_page;
            this.totalPages = total_pages;
            this.sortColumn = sort_column;
            this.sortOrder = sort_order;
            this.searchMatches = search_matches;
          }
        }
      }
    );
  }

  subscribeProjectInfoUpdates() {
    this.projectService.currentProjectInfoStageMessage.subscribe(
      ({ loaded, loading, data }) => {
        if (!loaded && !loading) {
          this.getProjectInfo();
        }

        if (loaded && !loading) {
          if (data) {
            this.projectInfo = data;
          }
        }
      }
    );
  }

  subscribeTaskInfoUpdates() {
    this.taskService.currentTaskInfoStageMessage.subscribe(
      ({ loaded, loading, data }) => {
        if (!loaded && !loading) {
          this.getTaskInfo();
        }

        if (loaded && !loading) {
          if (data) {
            this.taskInfo = data;
          }
        }
      }
    );
  }

  changeSubmitsRoute() {
    const routeMain = MainEnum.Self;
    const routeProject = ProjectEnum.Project;
    const routeTasks = TasksEnum.Tasks;
    const routeSubmits = TaskEnum.Submits;

    this.router.navigate(
      [
        `${routeMain}${routeProject}/${routeTasks}/${this.routeTaskID}/${routeSubmits}`,
      ],
      {
        queryParams: { page: this.currentPage },
        queryParamsHandling: 'merge',
      }
    );
  }

  pageChanged(currentPage) {
    if (this.currentPage !== currentPage) {
      this.currentPage = currentPage;
      this.changeSubmitsRoute();
      this.getTaskSubmits();
    }
  }

  getTaskSubmits() {
    this.taskService.getTaskSubmits({
      start: this.currentPage * this.rowsDefault,
      sort: `${this.sortOrder === 'asc' ? '-' : '+'}${this.sortColumn}`,
    });
  }

  getProjectInfo() {
    this.projectService.getProjectInfo();
  }

  getTaskInfo() {
    this.taskService.getTaskInfo();
  }

  handleSortChange({ sortOrder, colID }: TableColSortingInterface) {
    this.taskService.getTaskSubmits();
    this.sortOrder = sortOrder;
    this.sortColumn = colID;
    this.getTaskSubmits();
  }
}
