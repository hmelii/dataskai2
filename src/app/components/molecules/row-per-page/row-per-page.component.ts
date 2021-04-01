import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { OptionInterface } from '../../../interfaces/select/select.interface';

@Component({
  selector: 'app-row-per-page',
  templateUrl: './row-per-page.component.html',
  styleUrls: ['./row-per-page.component.scss'],
})
export class RowPerPageComponent implements OnInit, OnChanges {
  @Input() rows: number[];
  @Input() rowsDefault: number;
  @Output() onRowsChange: EventEmitter<number> = new EventEmitter<number>();
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

  handleChange($event: OptionInterface) {
    const { value } = $event;
    this.onRowsChange.emit(+value);
  }
}
