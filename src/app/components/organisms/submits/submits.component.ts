import { Component, Input, OnInit } from '@angular/core';
import { AuthorsService } from '../../../services/authors/authors.service';
import { ProjectService } from '../../../services/project/project.service';
import { TaskService } from '../../../services/task/task.service';
import {
  TaskConfigColumnInterface,
  TaskConfigInterface,
  TaskSubmitsInterface,
} from '../../../interfaces/task/task.interface';
import { SubmitInterface } from '../../../interfaces/submit/submit.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submits',
  templateUrl: './submits.component.html',
  styleUrls: ['./submits.component.scss'],
})
export class SubmitsComponent implements OnInit {
  loading = {
    projectInfo: false,
    taskInfo: false,
    taskConfig: false,
    taskSubmits: false,
    config: false,
  };

  loaded = {
    projectInfo: false,
    taskConfig: false,
    taskInfo: false,
    taskSubmits: false,
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

  constructor(
    private authorsService: AuthorsService,
    private projectService: ProjectService,
    private taskService: TaskService,
    private router: Router
  ) {
    this.taskService.currentTaskConfigStageMessage.subscribe(
      (taskConfig: TaskConfigInterface) => {
        if (taskConfig.data) {
          this.rows = taskConfig.data.rows_per_page_values;
          this.rowsDefault = taskConfig.data.rows_per_page_default;
        }
      }
    );
  }

  ngOnInit(): void {
    this.fetchTaskConfig();
    this.fetchSubmits();
    this.fetchTaskInfo();
    this.fetchProjectInfo();
  }

  fetchSubmits(params = {}) {
    this.loading.taskSubmits = true;
    this.taskService.fetchTaskSubmits(params).subscribe(
      (taskSubmits: TaskSubmitsInterface) => {
        this.taskService.updateTaskSubmitsMessage(taskSubmits);
        this.taskSubmits = taskSubmits.data.submits;
        this.currentPage = taskSubmits.meta.current_page;
        this.totalPages = taskSubmits.meta.total_pages;
        this.loaded.taskSubmits = true;
      },
      (error) => {
        this.error = error.message;
      },
      () => {
        this.loading.taskSubmits = false;
      }
    );
  }

  pageChanged(currentPage) {
    this.router.navigate(['/project/tasks/123/submits'], {
      queryParams: { page: currentPage },
      queryParamsHandling: 'merge',
    });
    this.fetchSubmits({ start: currentPage * this.rowsDefault });
    console.log('currentPage', currentPage);
  }

  fetchTaskConfig() {
    this.loading.config = true;
    this.taskService.fetchTaskConfig().subscribe(
      (taskConfig: TaskConfigInterface) => {
        this.taskConfigColumns = taskConfig.data.columns;
        this.taskService.updateTaskConfigMessage(taskConfig);
        this.loaded.taskConfig = true;
      },
      (error) => {
        this.error = error.message;
      },
      () => {
        this.loading.taskConfig = false;
      }
    );
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
}
