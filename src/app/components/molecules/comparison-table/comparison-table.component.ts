import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SubmitInterface } from '../../../interfaces/submit/submit.interface';
import {
  TaskConfigColumnInterface,
  TaskInterface,
} from '../../../interfaces/task/task.interface';
import { TableColSortingInterface } from '../../../interfaces/table-col-sorting/table-col-sorting.interface';

@Component({
  selector: 'app-comparison-table',
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.scss'],
})
export class ComparisonTableComponent implements OnInit, OnChanges {
  @Input() rows;
  @Input() cols;
  @Input() baselineID;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.rows);
    console.log(this.cols);
    console.log('baselineID', this.baselineID);
  }
}
