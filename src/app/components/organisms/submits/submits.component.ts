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
  selector: 'app-submits',
  templateUrl: './submits.component.html',
  styleUrls: ['./submits.component.scss'],
})
export class SubmitsComponent implements OnInit {
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
  }

  ngOnInit(): void {
    // this.fetchTaskConfig();
    this.fetchTaskInfo();
    this.fetchProjectInfo();
  }

  subscribeRouteUpdate() {
    this.activateRoute.params.subscribe((params) => {
      this.routeTaskID = params['taskID'];
      this.routeSubmitID = params['submitID'];
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
      (taskSubmits: TaskSubmitsInterface) => {
        const { loaded, loading, data, meta } = taskSubmits;

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
            } = meta;
            this.currentPage = current_page;
            this.totalPages = total_pages;
            this.sortColumn = sort_column;
            this.sortOrder = sort_order;
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
      this.fetchTaskSubmits();
    }
  }

  fetchTaskSubmits() {
    this.taskService.getTaskSubmits({
      start: this.currentPage * this.rowsDefault,
      sort: `${this.sortOrder === 'asc' ? '-' : '+'}${this.sortColumn}`,
    });
  }

  fetchTaskInfo() {
    this.loading.taskInfo = true;
    this.taskService.fetchTaskInfo().subscribe(
      (info) => {
        this.taskInfo = info;
        this.authorsService.updateAuthorsMessage(this.taskInfo.data.authors);
        this.taskService.updateTaskInfoMessage(
          this.taskInfo.data.task_description
        );
        this.loaded.taskInfo = true;
      },
      (error) => {
        this.error = error.message;
      },
      () => {
        this.loading.taskInfo = false;
      }
    );
  }

  fetchProjectInfo() {
    this.loading.projectInfo = true;
    this.projectService.fetchProjectInfo().subscribe(
      (info) => {
        this.projectInfo = info;
        this.projectService.updateProjectMessage(
          this.projectInfo.data.tasks.names
        );
        this.loaded.projectInfo = true;
      },
      (error) => {
        this.error = error.message;
      },
      () => {
        this.loading.projectInfo = false;
      }
    );
  }

  handleSortChange({ sortOrder, colID }: TableColSortingInterface) {
    console.log(sortOrder, colID);
    this.taskService.getTaskSubmits();
    this.sortOrder = sortOrder;
    this.sortColumn = colID;
    this.fetchTaskSubmits();
  }
}
