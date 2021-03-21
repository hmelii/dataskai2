import { Component, OnInit } from '@angular/core';
import { TaskEnum } from '../../../enums/routes/task.enum';
import { TasksEnum } from '../../../enums/routes/tasks.enum';
import { ProjectEnum } from '../../../enums/routes/project.enum';
import { MainEnum } from '../../../enums/routes/main.enum';
import { ComparisonService } from '../../../services/comparison/comparison.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../services/project/project.service';
import { ProjectInfoInterface } from '../../../interfaces/project/project.interface';

@Component({
  selector: 'app-project-main-tabs',
  templateUrl: './project-main-tabs.component.html',
  styleUrls: ['./project-main-tabs.component.scss'],
})
export class ProjectMainTabsComponent implements OnInit {
  routeTaskID = '';
  routeSubmits = TaskEnum.Submits;
  routeTasks = TasksEnum.Tasks;
  routeProject = ProjectEnum.Project;
  routeMain = MainEnum.Self;
  routeInfo = TaskEnum.Info;
  routeComparison = TaskEnum.ComparedSubmits;
  comparisonIDsLength = 0;
  projectTasksLength = 0;

  constructor(
    private comparisonService: ComparisonService,
    private projectService: ProjectService,
    private activateRoute: ActivatedRoute
  ) {
    this.subscribeRouteUpdate();
    this.subscribeComparisonIDsUpdate();
    this.subscribeProjectInfoUpdate();
  }

  subscribeProjectInfoUpdate() {
    this.projectService.currentProjectInfoStageMessage.subscribe(
      ({ data }: ProjectInfoInterface) => {
        if (!data) {
          return;
        }
        const {
          tasks: { count },
        } = data;
        if (count) {
          this.projectTasksLength = count;
        }
      }
    );
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
