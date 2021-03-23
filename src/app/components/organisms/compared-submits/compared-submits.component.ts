import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../services/authors/authors.service';
import { ProjectService } from '../../../services/project/project.service';
import { TaskService } from '../../../services/task/task.service';
import { TaskConfigInterface } from '../../../interfaces/task/task.interface';
import { ComparisonService } from '../../../services/comparison/comparison.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compared-submits',
  templateUrl: './compared-submits.component.html',
  styleUrls: ['./compared-submits.component.scss'],
})
export class ComparedSubmitsComponent implements OnInit {
  rows = null;
  cols = null;
  comparisonIDs = null;
  routeTaskID = null;
  comparisonBaselineSubmitID = null;
  baselineID = null;

  constructor(
    private authorsService: AuthorsService,
    private projectService: ProjectService,
    private taskService: TaskService,
    private comparisonService: ComparisonService,
    private activateRoute: ActivatedRoute
  ) {
    this.subscribeTaskConfigUpdates();
    this.subscribeTaskComparedSubmitsIDsUpdates();
    this.subscribeRouteUpdates();
    this.subscribeTaskComparedSubmitsUpdates();
  }

  subscribeRouteUpdates() {
    this.activateRoute.params.subscribe((params) => {
      this.routeTaskID = params['taskID'];
      if (this.comparisonIDs) {
        this.getComparedSubmits();
      }
    });
  }

  subscribeTaskComparedSubmitsUpdates() {
    this.comparisonService.currentComparisonSubmitsStageMessage.subscribe(
      ({ loading, loaded, data, meta }) => {
        if (loaded) {
          this.cols = data.submits;
          console.log('meta', meta);
          this.baselineID = meta.baseline_submit;
          console.log('comparisonSubmits', data, meta);
        }
      }
    );
  }

  subscribeTaskComparedSubmitsIDsUpdates() {
    this.comparisonService.currentComparisonIDSStageMessage.subscribe(
      (comparisonIDs) => {
        this.comparisonIDs = comparisonIDs;

        console.log(this.comparisonIDs);

        if (this.routeTaskID) {
          this.getComparedSubmits();
        }
      }
    );
  }

  subscribeTaskConfigUpdates() {
    this.taskService.currentTaskConfigStageMessage.subscribe(
      (taskConfig: TaskConfigInterface) => {
        const { loaded, loading, data } = taskConfig;

        if (!loaded && !loading) {
          this.taskService.getTaskConfig();
        }

        if (loaded && !loading) {
          if (data) {
            this.rows = taskConfig.data.columns;
          }
        }
      }
    );
  }

  getComparedSubmits() {
    const filterdComparisonIDs = this.comparisonIDs[this.routeTaskID];
    if (!filterdComparisonIDs || !filterdComparisonIDs.length) {
      return;
    }

    const comparisonBaselineSubmitID: { [key: string]: string } = {};

    if (this.comparisonBaselineSubmitID) {
      comparisonBaselineSubmitID.baseline_submit = this.comparisonBaselineSubmitID;
    }

    this.comparisonService.getComparisonSubmits({
      ids: filterdComparisonIDs,
      taskID: this.routeTaskID,
      ...comparisonBaselineSubmitID,
    });
  }

  ngOnInit(): void {}
}
