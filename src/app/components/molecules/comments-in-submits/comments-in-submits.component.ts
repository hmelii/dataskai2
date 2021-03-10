import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task/task.service';
import { SubmitInterface } from '../../../interfaces/submit/submit.interface';
import { TaskSubmitsInterface } from '../../../interfaces/task/task.interface';

@Component({
  selector: 'app-comments-in-submits',
  templateUrl: './comments-in-submits.component.html',
  styleUrls: ['./comments-in-submits.component.scss'],
})
export class CommentsInSubmitsComponent implements OnInit {
  taskSubmitsComments: SubmitInterface[] = null;
  isActive = false;

  constructor(private taskService: TaskService) {
    taskService.currentTaskSubmitsStageMessage.subscribe(
      (taskSubmits: TaskSubmitsInterface) => {
        if (taskSubmits && taskSubmits.data) {
          this.taskSubmitsComments = taskSubmits.data.submits.filter(
            (submit) => submit.comment.length
          );
          console.log(this.taskSubmitsComments);
        }
      }
    );
  }

  ngOnInit(): void {}

  handleToggle() {
    this.isActive = !this.isActive;
  }
}
