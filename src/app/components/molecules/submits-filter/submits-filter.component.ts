import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskEnum } from '../../../enums/routes/task.enum';
import { TasksEnum } from '../../../enums/routes/tasks.enum';
import { ProjectEnum } from '../../../enums/routes/project.enum';
import { MainEnum } from '../../../enums/routes/main.enum';

@Component({
  selector: 'app-submits-filter',
  templateUrl: './submits-filter.component.html',
  styleUrls: ['./submits-filter.component.scss'],
})
export class SubmitsFilterComponent implements OnInit {
  routeTaskID = null;
  routeSubmits = TaskEnum.Submits;
  routeTasks = TasksEnum.Tasks;
  routeProject = ProjectEnum.Project;
  routeMain = MainEnum.Self;
  routeInfo = TaskEnum.Info;
  routeFavorites = TaskEnum.FavoriteSubmits;
  routeDeleted = TaskEnum.DeletedSubmits;

  constructor(private activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe(
      (params) => (this.routeTaskID = params['taskID'])
    );
  }

  ngOnInit(): void {}
}
