import { Component, OnInit } from '@angular/core';
import { TaskEnum } from '../../../enums/routes/task.enum';
import { TasksEnum } from '../../../enums/routes/tasks.enum';
import { ProjectEnum } from '../../../enums/routes/project.enum';
import { MainEnum } from '../../../enums/routes/main.enum';
import { ComparisonService } from '../../../services/comparison/comparison.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.component.html',
  styleUrls: ['./main-tabs.component.scss'],
})
export class MainTabsComponent implements OnInit {
  routeTaskID = '';
  routeSubmits = TaskEnum.Submits;
  routeTasks = TasksEnum.Tasks;
  routeProject = ProjectEnum.Project;
  routeMain = MainEnum.Self;
  routeInfo = TaskEnum.Info;
  routeComparison = TaskEnum.ComparedSubmits;
  comparisonIDsLength = 0;

  constructor(
    private comparisonService: ComparisonService,
    private activateRoute: ActivatedRoute
  ) {
    this.subscribeRouteUpdate();
    this.subscribeComparisonIDsUpdate();
  }

  subscribeComparisonIDsUpdate() {
    this.comparisonService.currentComparisonIDSStageMessage.subscribe(
      (comparisonIDs) => {
        this.comparisonIDsLength = comparisonIDs.length;
      }
    );
  }

  subscribeRouteUpdate() {
    this.activateRoute.params.subscribe((params) => {
      this.routeTaskID = params['taskID'];
    });
  }

  ngOnInit(): void {}
}
