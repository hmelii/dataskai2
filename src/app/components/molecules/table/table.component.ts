import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubmitInterface } from '../../../interfaces/submit/submit.interface';
import {
  TaskConfigColumnInterface,
  TaskInterface,
} from '../../../interfaces/task/task.interface';
import { TableColSortingInterface } from '../../../interfaces/table-col-sorting/table-col-sorting.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() colsItems;
  @Input() rowsItems;
  @Input() selectRowWithID: string;
  @Input() sortCol: string;
  @Input() sortOrder: string;
  @Output() onSortChange: EventEmitter<
    TableColSortingInterface
  > = new EventEmitter<TableColSortingInterface>();

  cols: TaskConfigColumnInterface[] = [];
  rows: SubmitInterface[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.colsItems) {
      console.log('this.colsItems', this.colsItems);
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

  handleSortChange($event: TableColSortingInterface) {
    this.onSortChange.emit($event);
  }
}
