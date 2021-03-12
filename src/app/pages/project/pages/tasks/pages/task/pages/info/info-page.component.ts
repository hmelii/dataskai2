import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../../../../../../services/authors/authors.service';
import { TaskService } from '../../../../../../../../services/task/task.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submits-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
})
export class InfoPageComponent implements OnInit {
  title = 'Task Info';
  taskInfo;
  loading = false;
  error = null;

  id: number;
  private subscription: Subscription;

  constructor(
    private authorsService: AuthorsService,
    private taskService: TaskService,
    private activateRoute: ActivatedRoute
  ) {
    this.subscription = activateRoute.params.subscribe((params) => {
      //this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.fetchTaskInfo();
  }

  fetchTaskInfo() {
    this.loading = true;
    this.taskService.fetchTaskInfo().subscribe(
      (info) => {
        this.taskInfo = info;
        this.authorsService.updateAuthorsMessage(this.taskInfo.data.authors);
        this.taskService.updateTaskInfoMessage(
          this.taskInfo.data.task_description
        );
        this.loading = false;
      },
      (error) => {
        this.error = error.message;
      },
      () => {}
    );
  }
}
