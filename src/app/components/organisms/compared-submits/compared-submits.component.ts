import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../services/authors/authors.service';
import { ProjectService } from '../../../services/project/project.service';
import { TaskService } from '../../../services/task/task.service';
import { TaskSubmitsInterface } from '../../../interfaces/task/task.interface';
import { SubmitInterface } from '../../../interfaces/submit/submit.interface';

@Component({
  selector: 'app-compared-submits',
  templateUrl: './compared-submits.component.html',
  styleUrls: ['./compared-submits.component.scss'],
})
export class ComparedSubmitsComponent implements OnInit {
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
  config = null;

  constructor(
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
    this.loading.taskSubmits = true;
    this.taskService.fetchTaskSubmits().subscribe(
      (taskSubmits: TaskSubmitsInterface) => {
        this.taskSubmits = taskSubmits.data.submits;
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
