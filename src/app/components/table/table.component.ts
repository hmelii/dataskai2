import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() config;
  @Input() items;

  cols: [] = [];
  rows: [] = [];
  headDict = {

  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.config) {
      this.generateTableHead();
    }

    if (this.items) {
      this.generateTableBody();
    }
  }

  generateTableHead() {
    //console.log('this.config', this.config);
    this.cols = this.config.data.columns;
    console.log('this.config', this.config)

  }

  generateTableBody() {
   console.log('this.items', this.items);
    this.rows = this.items.data.submits;
   console.log(this.rows)

  }

}
