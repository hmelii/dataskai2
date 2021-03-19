import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../services/authors/authors.service';
import { ProjectService } from '../../../services/project/project.service';
import { TaskService } from '../../../services/task/task.service';
import {
  TaskConfigColumnInterface,
  TaskConfigInterface,
  TaskInterface,
  TaskSubmitsInterface,
} from '../../../interfaces/task/task.interface';
import { SubmitInterface } from '../../../interfaces/submit/submit.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MainEnum } from '../../../enums/routes/main.enum';
import { ProjectEnum } from '../../../enums/routes/project.enum';
import { TaskEnum } from '../../../enums/routes/task.enum';
import { TasksEnum } from '../../../enums/routes/tasks.enum';
import { TableColSortingInterface } from '../../../interfaces/table-col-sorting/table-col-sorting.interface';
import {
  ProjectConfigDataColumnInterface,
  ProjectTasksInterface,
} from '../../../interfaces/project/project.interface';

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
  projectConfig = null;

  routeSubmits = TaskEnum.Submits;
  routeTasks = TasksEnum.Tasks;
  routeProject = ProjectEnum.Project;
  routeMain = MainEnum.Self;

  constructor(
    private authorsService: AuthorsService,
    private projectService: ProjectService,
    private taskService: TaskService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.subscribeProjectInfoUpdates();
    this.subscribeProjectConfigUpdates();
    this.subscribeProjectTasksUpdates();
    this.subscribeRouteUpdate();
  }

  ngOnInit(): void {}

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

  subscribeProjectConfigUpdates() {
    this.projectService.currentProjectConfigStageMessage.subscribe(
      ({ loaded, loading, data }) => {
        if (!loaded && !loading) {
          this.projectService.getProjectConfig();
        }

        if (loaded && !loading) {
          if (data) {
            this.projectConfigColumns = data.columns;
            this.rowsDefault = data.rows_per_page_default;
            this.rows = data.rows_per_page_values;
          }
        }
      }
    );
  }

  subscribeProjectTasksUpdates() {
    this.projectService.currentProjectTasksStageMessage.subscribe(
      ({ loaded, loading, data }) => {
        if (!loaded && !loading) {
          this.projectService.getProjectTasks();
        }

        if (loaded && !loading) {
          if (data) {
            this.projectTasks = data.tasks;
          }
        }
      }
    );
  }

  subscribeRouteUpdate() {
    this.activateRoute.params.subscribe((params) => {
      this.routeTaskID = params['taskID'];
      this.routeSubmitID = params['submitID'];
    });
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
    }
  }

  handleSortChange({ sortOrder, colID }: TableColSortingInterface) {
    this.taskService.getTaskSubmits();
    this.sortOrder = sortOrder;
    this.sortColumn = colID;
  }
}
