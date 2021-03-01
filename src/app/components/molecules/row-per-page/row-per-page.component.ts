import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-per-page',
  templateUrl: './row-per-page.component.html',
  styleUrls: ['./row-per-page.component.scss'],
})
export class RowPerPageComponent implements OnInit {
  @Input() rows: number[];
  options = null;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log('this.rows', this.rows);

    if (this.rows) {
      this.options = this.rows.map((item) => ({ value: item, label: item }));
    }
  }
}
