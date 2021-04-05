import { Component, OnInit } from '@angular/core';
import { TaskEnum } from '../../../enums/routes/task.enum';
import { TasksEnum } from '../../../enums/routes/tasks.enum';
import { ProjectEnum } from '../../../enums/routes/project.enum';
import { MainEnum } from '../../../enums/routes/main.enum';
import { ComparisonService } from '../../../services/comparison/comparison.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../services/project/project.service';
import { ProjectInfoInterface } from '../../../interfaces/project/project.interface';
import { TaskService } from '../../../services/task/task.service';

@Component({
  selector: 'app-task-main-tabs',
  templateUrl: './task-main-tabs.component.html',
  styleUrls: ['./task-main-tabs.component.scss'],
})
export class TaskMainTabsComponent implements OnInit {
  routeTaskID = '';
  routeSubmits = TaskEnum.Submits;
  routeTasks = TasksEnum.Tasks;
  routeProject = ProjectEnum.Project;
  routeMain = MainEnum.Self;
  routeInfo = TaskEnum.Info;
  routeComparison = TaskEnum.ComparedSubmits;
  comparisonIDsLength = 0;
  submitsLength = 0;

  constructor(
    private comparisonService: ComparisonService,
    private projectService: ProjectService,
    private activateRoute: ActivatedRoute,
    private taskService: TaskService
  ) {
    this.subscribeRouteUpdate();
    this.subscribeComparisonIDsUpdate();
    this.subscribeTaskInfoUpdates();
  }

  subscribeTaskInfoUpdates() {
    this.taskService.currentTaskInfoStageMessage.subscribe(
      ({ loaded, loading, data }) => {
        if (!loaded && !loading) {
          this.taskService.getTaskInfo();
        }
        if (loaded && !loading) {
          if (data && data.submits) {
            this.submitsLength = data.submits;
          }
        }
      }
    );
  }

  subscribeComparisonIDsUpdate() {
    this.comparisonService.currentComparisonIDSStageMessage.subscribe(
      (comparisonIDs) => {
        if (this.routeTaskID && comparisonIDs[this.routeTaskID]) {
          this.comparisonIDsLength = comparisonIDs[this.routeTaskID].length;
        }
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
