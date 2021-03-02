import { Component, OnInit } from '@angular/core';
import { TaskEnum } from '../../../enums/routes/task.enum';
import { TasksEnum } from '../../../enums/routes/tasks.enum';
import { ProjectEnum } from '../../../enums/routes/project.enum';
import { MainEnum } from '../../../enums/routes/main.enum';

@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.component.html',
  styleUrls: ['./main-tabs.component.scss'],
})
export class MainTabsComponent implements OnInit {
  routeTaskId = 123;
  routeSubmits = TaskEnum.Submits;
  routeTasks = TasksEnum.Tasks;
  routeProject = ProjectEnum.Project;
  routeMain = MainEnum.Main;
  routeInfo = TaskEnum.Info;
  routeComparison = TaskEnum.ComparedSubmits;

  constructor() {}

  ngOnInit(): void {}
}
