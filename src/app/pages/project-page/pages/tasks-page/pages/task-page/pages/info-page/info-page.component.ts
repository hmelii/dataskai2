import { Component, OnInit } from '@angular/core';
import { SubmitsPageService } from "../submits-page/submits-page.service";
import { AuthorsService } from "../../../../../../../../services/authors/authors.service";
import { TaskInfoService } from "../../../../../../../../services/task-info/task-info.service";

@Component({
  selector: 'app-tasks-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
})
export class InfoPageComponent implements OnInit {
  title = "Task Info";
  taskInfo
  loading = false;
  error = null


  constructor(private submitsService: SubmitsPageService, private authorsService: AuthorsService, private taskInfoService: TaskInfoService) {
  }


  ngOnInit(): void {
    this.fetchTaskInfo();
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



}
