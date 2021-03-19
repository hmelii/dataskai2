import { Component, Input, OnInit } from '@angular/core';
import { TaskEnum } from '../../../enums/routes/task.enum';
import { TasksEnum } from '../../../enums/routes/tasks.enum';
import { ProjectEnum } from '../../../enums/routes/project.enum';
import { MainEnum } from '../../../enums/routes/main.enum';

@Component({
  selector: 'app-table-task-name',
  templateUrl: './table-task-name.component.html',
  styleUrls: ['./table-task-name.component.scss'],
})
export class TableTaskNameComponent implements OnInit {
  @Input() id;

  routeSubmits = TaskEnum.Submits;
  routeTasks = TasksEnum.Tasks;
  routeProject = ProjectEnum.Project;
  routeMain = MainEnum.Self;
  routeInfo = TaskEnum.Info;

  constructor() {}

  ngOnInit(): void {}
}
