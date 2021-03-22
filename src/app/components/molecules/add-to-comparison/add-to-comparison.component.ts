import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComparisonService } from '../../../services/comparison/comparison.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-to-comparison',
  templateUrl: './add-to-comparison.component.html',
  styleUrls: ['./add-to-comparison.component.scss'],
})
export class AddToComparisonComponent implements OnInit {
  isInComparison = false;
  routeTaskID;

  @Input() id: string;

  constructor(
    private comparisonService: ComparisonService,
    private activateRoute: ActivatedRoute
  ) {
    this.subscribeRouteUpdate();
  }

  ngOnInit(): void {
    this.updateIsInComparison();
  }

  updateIsInComparison() {
    this.comparisonService.currentComparisonIDSStageMessage.subscribe(
      (comparisonIDs) => {
        if (this.routeTaskID && comparisonIDs[this.routeTaskID]) {
          const findedIndex = comparisonIDs[this.routeTaskID].findIndex(
            (id) => {
              return id === this.id;
            }
          );
          this.isInComparison = findedIndex > -1;
        }
      }
    );
  }

  subscribeRouteUpdate() {
    this.activateRoute.params.subscribe((params) => {
      this.routeTaskID = params['taskID'];
    });
  }

  handleClick() {
    this.comparisonService.updateComparisonIDSMessage({
      taskID: this.routeTaskID,
      submitID: this.id,
    });
  }
}
