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
  taskSubmits: SubmitInterface[] = null;
  error = null;
  projectInfo = null;
  taskInfo = null;
  taskConfigColumns: TaskConfigColumnInterface[] = null;
  currentPage = null;
  totalPages = null;
  rows: number[] = null;
  rowsDefault: number;
  taskID = null;
  submitID = null;
  sortColumn = null;
  sortOrder = null;
  searchMatches = null;
  startIndex = 1;
  oldTaskMeta = null;

  constructor(
    private authorsService: AuthorsService,
    private projectService: ProjectService,
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.subscribeRouteUpdates();
    this.subscribeSubmitsUpdates();
    this.subscribeTaskConfigUpdates();
    this.subscribeProjectInfoUpdates();
    this.subscribeTaskInfoUpdates();
    this.subscribeTaskMetaOldUpdates();
    this.subscribeTaskMetaUpdates();
  }

  ngOnInit(): void {}

  subscribeRouteUpdates() {
    this.activatedRoute.queryParams.subscribe(({ page = 1 }) => {
      this.currentPage = page;
    });

    this.activatedRoute.params.subscribe(({ taskID, submitID }) => {
      this.taskID = taskID;
      this.submitID = submitID; // используется для перехода по ссылке Например: http://localhost/project/tasks/aero__fw_clf_v1__ENG_1_FUEL_FILTER_CLOG__21/submits/6017b6b376a8c74ef40b1247d6

      this.taskService.updateTaskMetaMessage({
        task_name: this.taskID,
        submit_id: this.submitID,
        search: null,
      });
    });
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

  subscribeTaskConfigUpdates() {
    this.taskService.currentTaskConfigStageMessage.subscribe(
      (taskConfig: TaskConfigInterface) => {
        const { loaded, loading, data } = taskConfig;

        if (!loaded && !loading) {
          this.getTaskConfig();
        }

        if (loaded && !loading) {
          if (data && data.columns) {
            this.taskConfigColumns = data.columns.sort(this.compare);
            this.rows = data.rows_per_page_values;
            this.rowsDefault = data.rows_per_page_default;
            this.updateStartIndex();
          }
        }
      }
    );
  }

  subscribeSubmitsUpdates() {
    this.taskService.currentTaskSubmitsStageMessage.subscribe(
      ({ loaded, loading, data, meta }) => {
        if (!loaded && !loading) {
          this.getTaskSubmits();
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
        `${routeMain}${routeProject}/${routeTasks}/${this.taskID}/${routeSubmits}`,
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
    this.taskService.getTaskSubmits({ start_page: this.currentPage });
  }

  getProjectInfo() {
    this.projectService.getProjectInfo();
  }

  getTaskInfo() {
    this.taskService.getTaskInfo();
  }

  handleSortChange({ sortOrder, colID }: TableColSortingInterface) {
    this.taskService.updateTaskMetaMessage({
      sort_order: sortOrder,
      sort_column: colID,
    });
  }

  subscribeTaskMetaOldUpdates() {
    this.taskService.currentTaskMetaPrevStageMessage.subscribe((taskMeta) => {
      this.oldTaskMeta = taskMeta;
    });
  }

  subscribeTaskMetaUpdates() {
    this.taskService.currentTaskMetaStageMessage.subscribe((taskMeta) => {
      const {
        authors: prevAuthors = '',
        task_name: prevTaskName = null,
        search: prevSearch = null,
      } = this.oldTaskMeta;

      const {
        authors = '',
        per_page = null,
        sort_order = this.sortOrder,
        sort_column = this.sortColumn,
        task_name = null,
        search = null,
      } = taskMeta;

      if (
        authors !== prevAuthors ||
        per_page != null ||
        sort_order !== this.sortOrder ||
        sort_column !== this.sortColumn ||
        search !== prevSearch
      ) {
        this.currentPage = 1;
        this.getTaskSubmits();
      }

      if (task_name && task_name !== prevTaskName) {
        this.currentPage = 1;
        this.getTaskInfo();
        this.getTaskConfig();
        this.getTaskSubmits();
      }
    });
  }

  getTaskConfig() {
    this.taskService.getTaskConfig();
  }

  handleRowsChanged($event: number) {
    this.taskService.updateTaskMetaMessage({ per_page: $event });
  }
}
