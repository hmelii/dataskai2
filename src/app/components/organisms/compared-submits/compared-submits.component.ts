import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class ComparedSubmitsComponent implements OnInit, OnDestroy {
  rows = null;
  cols = null;
  comparisonIDs = null;
  routeTaskID = null;
  comparisonBaselineSubmitID = null;
  baselineID = null;
  empty = false;

  constructor(
    private authorsService: AuthorsService,
    private projectService: ProjectService,
    private taskService: TaskService,
    private comparisonService: ComparisonService,
    private activateRoute: ActivatedRoute
  ) {
    this.subscribeRouteUpdates();
    this.subscribeTaskComparedSubmitsUpdates();
    this.subscribeTaskConfigUpdates();
    this.subscribeTaskComparedSubmitsIDsUpdates();
  }

  subscribeRouteUpdates() {
    this.activateRoute.params.subscribe((params) => {
      console.log('params', params);
      this.routeTaskID = params['taskID'];
      if (this.comparisonIDs) {
        this.getComparedSubmits();
      }
    });
  }

  subscribeTaskComparedSubmitsUpdates() {
    this.comparisonService.currentComparisonSubmitsStageMessage.subscribe(
      ({ loading, loaded, data, meta }) => {
        if (!loaded) {
          return;
        }

        if (data && data.submits) {
          this.cols = data.submits;
          this.baselineID = meta.baseline_submit;
        }
      }
    );
  }

  ngOnDestroy() {
    this.comparisonService.removeComparedSubmits();
  }

  subscribeTaskComparedSubmitsIDsUpdates() {
    this.comparisonService.currentComparisonIDSStageMessage.subscribe(
      (comparisonIDs) => {
        this.comparisonIDs = comparisonIDs;
        console.log(this.routeTaskID, comparisonIDs);
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
    if (!this.comparisonIDs || !this.routeTaskID) {
      return;
    }

    const filterdComparisonIDs = this.comparisonIDs[this.routeTaskID];
    console.log(this.comparisonIDs, this.routeTaskID);
    console.log(this.comparisonIDs[this.routeTaskID]);

    if (!filterdComparisonIDs || !filterdComparisonIDs.length) {
      this.empty = true;
      return;
    }

    this.empty = false;

    console.log('зашло сюда');

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
