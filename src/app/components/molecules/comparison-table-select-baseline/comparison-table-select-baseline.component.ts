import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparison-table-select-baseline',
  templateUrl: './comparison-table-select-baseline.component.html',
  styleUrls: ['./comparison-table-select-baseline.component.scss'],
})
export class ComparisonTableSelectBaselineComponent implements OnInit {
  @Input() active: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
