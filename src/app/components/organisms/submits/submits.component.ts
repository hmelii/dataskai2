import { Component, Input, OnInit } from '@angular/core';
import { SubmitsService } from '../../../services/submits/submits.service';
import { AuthorsService } from '../../../services/authors/authors.service';
import { ProjectService } from '../../../services/project/project.service';
import { TaskService } from '../../../services/task/task.service';

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
    submits: false,
    config: false,
  };

  loaded = {
    projectInfo: false,
    taskConfig: false,
    taskInfo: false,
    submits: false,
    config: false,
  };

  submits = null;
  error = null;
  projectInfo = null;
  taskInfo = null;
  config = null;

  constructor(
    private submitsService: SubmitsService,
    private authorsService: AuthorsService,
    private projectService: ProjectService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.fetchConfig();
    this.fetchSubmits();
    this.fetchTaskInfo();
    this.fetchProjectInfo();
  }

  fetchSubmits() {
    this.loading.submits = true;
    this.submitsService.fetchSubmits().subscribe(
      (submits) => {
        this.submits = submits;
        this.loaded.submits = true;
      },
      (error) => {
        this.error = error.message;
      },
      () => {
        this.loading.submits = false;
      }
    );
  }

  fetchConfig() {
    this.loading.config = true;
    this.taskService.fetchTaskConfig().subscribe(
      (config) => {
        this.config = config;
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
