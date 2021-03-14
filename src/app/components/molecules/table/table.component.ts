import { Component, Input, OnInit } from '@angular/core';
import { FeaturesInfoService } from '../../organisms/features-info/features-info.service';
import { SubmitInterface } from '../../../interfaces/submit/submit.interface';
import { TaskConfigColumnInterface } from '../../../interfaces/task/task.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() colsItems;
  @Input() rowsItems: SubmitInterface[];
  @Input() selectRowWithID: string;

  cols: TaskConfigColumnInterface[] = [];
  rows: SubmitInterface[] = [];

  constructor(private featuresInfoService: FeaturesInfoService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.colsItems) {
      this.generateTableHead();
    }

    if (this.rowsItems) {
      this.generateTableBody();
    }
  }

  generateTableHead() {
    this.cols = this.colsItems;
  }

  generateTableBody() {
    this.rows = this.rowsItems;
  }

  featureHandleClick(submitID: string) {
    this.featuresInfoService.updateFeaturesInfoMessage(submitID);
  }
}
