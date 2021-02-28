import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task/task.service';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss'],
})
export class TaskInfoComponent implements OnInit {
  infos: Array<any>;

  constructor(private taskInfoService: TaskService) {}

  ngOnInit(): void {
    this.taskInfoService.currentTaskInfoStageMessage.subscribe((infos) => {
      console.log(infos);
      return (this.infos = infos);
    });
  }
}
