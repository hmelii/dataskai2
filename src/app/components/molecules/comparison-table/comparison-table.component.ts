import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-comparison-table',
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.scss'],
})
export class ComparisonTableComponent implements OnInit, OnChanges {
  @Input() rows;
  @Input() cols;
  @Input() baselineID;
  @Output() onHandleChangeBaselineID: EventEmitter<string> = new EventEmitter<
    string
  >();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {}

  handleChangeBaselineID(submitID) {
    this.onHandleChangeBaselineID.emit(submitID);
  }
}
