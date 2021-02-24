import { Component, OnInit } from '@angular/core';
import { SubmitsPageService } from "./submits-page.service";
import { AuthorsService } from "../../../../../../../../services/authors/authors.service";
import { ProjectService } from "../../../../../../../../services/project/project.service";
import { TaskInfoService } from "../../../../../../../../services/task-info/task-info.service";

@Component({
  selector: 'app-tasks-page',
  templateUrl: './submits-page.component.html',
  styleUrls: ['./submits-page.component.scss'],
})
export class SubmitsPageComponent implements OnInit {
  title = "Task";

  loading = false;
  config = null;
  submits = null;
  error = null;
  taskInfo = null;
  projectInfo = null;

  constructor( private submitsService: SubmitsPageService, private  authorsService: AuthorsService, private  projectsService: ProjectService, private taskInfoService: TaskInfoService) {
  }


  ngOnInit(): void {
    this.fetchConfig();
    this.fetchSubmits();
    this.fetchTaskInfo();
    this.fetchProjectInfo();
  }

  fetchConfig() {
    this.loading = true;
    this.submitsService.fetchConfig()
      .subscribe((config) => {
        this.config = config;
        this.loading = false;
      }, error => {
        this.error = error.message;
      }, () => {
        console.log('Выполняется в конце стрима в любом случае');
      });

  }

  fetchTaskInfo() {
    this.loading = true;
    this.submitsService.fetchTaskInfo()
      .subscribe((info) => {
        this.taskInfo = info;
        this.authorsService.updateAuthorsMessage(this.taskInfo.data.authors);
        console.log(this.taskInfo.data)
        this.taskInfoService.updateTaskInfoMessage(this.taskInfo.data.task_description);
        this.loading = false;
      }, error => {
        this.error = error.message;
      }, () => {
        console.log('Выполняется в конце стрима в любом случае');
      });

  }

  fetchProjectInfo() {
    this.loading = true;
    this.submitsService.fetchProjectInfo()
      .subscribe((info) => {
        this.projectInfo = info;
        this.projectsService.updateProjectMessage(this.projectInfo.data.tasks.names)
        this.loading = false;
      }, error => {
        this.error = error.message;
      }, () => {
        console.log('Выполняется в конце стрима в любом случае');
      });

  }

  fetchSubmits() {
    this.loading = true;
    this.submitsService.fetchSubmits()
      .subscribe((submits) => {
        this.submits = submits;
        this.loading = false;
      }, error => {
        this.error = error.message;
      }, () => {
        console.log('Выполняется в конце стрима в любом случае');
      });

  }

}
