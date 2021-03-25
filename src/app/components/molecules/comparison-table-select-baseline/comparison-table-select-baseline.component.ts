import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comparison-table-select-baseline',
  templateUrl: './comparison-table-select-baseline.component.html',
  styleUrls: ['./comparison-table-select-baseline.component.scss'],
})
export class ComparisonTableSelectBaselineComponent implements OnInit {
  @Input() baselineID: string;
  @Input() submitID: string;

  isActive: boolean = false;

  @Output() onHandleChangeBaselineID: EventEmitter<string> = new EventEmitter<
    string
  >();

  constructor() {}

  ngOnInit(): void {
    this.isActive = this.baselineID === this.submitID;
  }

  handleChangeBaselineID() {
    this.onHandleChangeBaselineID.emit(this.submitID);
  }
}
