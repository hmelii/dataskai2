import { Component, Input, OnInit } from '@angular/core';
import { ComparisonService } from '../../../services/comparison/comparison.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comparison-table-remove-form-comparison',
  templateUrl: './comparison-table-remove-form-comparison.component.html',
  styleUrls: ['./comparison-table-remove-form-comparison.component.scss'],
})
export class ComparisonTableRemoveFormComparisonComponent implements OnInit {
  @Input() submitID;

  taskID: string;

  constructor(
    private comparisonService: ComparisonService,
    private activateRoute: ActivatedRoute
  ) {
    this.subscribeRouteUpdate();
  }

  ngOnInit(): void {}

  handleClick() {
    console.log(this.taskID, this.submitID);
    this.comparisonService.updateComparisonIDSMessage({
      taskID: this.taskID,
      submitID: this.submitID,
    });
  }

  subscribeRouteUpdate() {
    this.activateRoute.params.subscribe((params) => {
      this.taskID = params['taskID'];
    });
  }
}
