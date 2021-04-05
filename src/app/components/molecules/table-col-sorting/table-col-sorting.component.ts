import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { TableColSortingInterface } from '../../../interfaces/table-col-sorting/table-col-sorting.interface';

@Component({
  selector: 'app-table-col-sorting',
  templateUrl: './table-col-sorting.component.html',
  styleUrls: ['./table-col-sorting.component.scss'],
})
export class TableColSortingComponent implements OnInit, OnChanges {
  @Input() sortCol;
  @Input() colID;
  @Input() sortOrder;
  @Output() onSortChange: EventEmitter<
    TableColSortingInterface
  > = new EventEmitter<TableColSortingInterface>();
  sort = null;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.sort = null;
    if (this.colID === this.sortCol) {
      this.sort = this.sortOrder;
    }
  }

  handleClick() {
    if (this.sort === null) {
      this.sort = 'desc';
    } else if (this.sort === 'desc') {
      this.sort = 'asc';
    } else {
      this.sort = 'desc';
    }
    this.onSortChange.emit({ colID: this.colID, sortOrder: this.sort });
  }
}
