import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { OptionInterface } from '../../../interfaces/select/select.interface';

@Component({
  selector: 'app-row-per-page',
  templateUrl: './row-per-page.component.html',
  styleUrls: ['./row-per-page.component.scss'],
})
export class RowPerPageComponent implements OnInit, OnChanges {
  @Input() rows: number[];
  @Input() rowsDefault: number;
  options: OptionInterface[] = null;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.rows && this.rowsDefault) {
      this.options = this.rows.map((item) => ({
        value: item,
        label: item,
        selected: this.rowsDefault === item,
      }));
    }
  }
}
