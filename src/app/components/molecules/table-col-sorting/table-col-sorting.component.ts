import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-col-sorting',
  templateUrl: './table-col-sorting.component.html',
  styleUrls: ['./table-col-sorting.component.scss'],
})
export class TableColSortingComponent implements OnInit {
  sort = null;

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    if (this.sort === null) {
      this.sort = 'desc';
    } else if (this.sort === 'desc') {
      this.sort = 'asc';
    } else {
      this.sort = null;
    }
  }
}
