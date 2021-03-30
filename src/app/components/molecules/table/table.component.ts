import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubmitInterface } from '../../../interfaces/submit/submit.interface';

import { TaskConfigColumnInterface } from '../../../interfaces/task/task.interface';
import { TableColSortingInterface } from '../../../interfaces/table-col-sorting/table-col-sorting.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() startIndex: number = 1;
  @Input() colsItems;
  @Input() rowsItems;
  @Input() selectRowWithID: string;
  @Input() sortCol: string;
  @Input() sortOrder: string;
  @Input() searchMatches;
  @Input() component;

  @Output() onSortChange: EventEmitter<
    TableColSortingInterface
  > = new EventEmitter<TableColSortingInterface>();

  cols: TaskConfigColumnInterface[] = null;
  rows: SubmitInterface[] = null;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.searchMatches) {
      // находим строчки и колонки удовлетворяющие поиску
      /*this.colsItems = this.colsItems.map((col) => {
        // колонки
        let newCol;

        this.searchMatches.forEach((item) => {
          console.log(item.matched_columns.includes(col.id));

          newCol = {
            ...col,
            founded:
              newCol && newCol.founded
                ? true
                : item.matched_columns.includes(col.id),
          };
        });

        return newCol;
      });*/

      this.rowsItems = this.rowsItems.map((row) => {
        //строки
        let newRow;
        this.searchMatches.forEach((item) => {
          const key = Object.keys(item.matched_row)[0];
          const value = Object.values(item.matched_row)[0];

          if (row[key] === value) {
            row = {
              ...row,
              founded: true,
              foundedItems: item.matched_columns.reduce(
                (acc, curr) => ((acc[curr] = true), acc),
                {}
              ),
            };
          }
        });
        return row;
      });
    }

    if (this.colsItems) {
      this.generateTableHead();
    }

    if (this.rowsItems) {
      this.generateTableBody();
    }
  }

  generateTableHead() {
    this.cols = this.colsItems;
    console.log('this.cols', this.cols);
  }

  generateTableBody() {
    this.rows = this.rowsItems;
    console.log('this.rows', this.rows);
  }

  handleSortChange($event: TableColSortingInterface) {
    this.onSortChange.emit($event);
  }
}
