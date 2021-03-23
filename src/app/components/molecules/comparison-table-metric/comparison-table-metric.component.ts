import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparison-table-metric',
  templateUrl: './comparison-table-metric.component.html',
  styleUrls: ['./comparison-table-metric.component.scss'],
})
export class ComparisonTableMetricComponent implements OnInit {
  @Input() metric;
  @Input() comparison;

  constructor() {}

  ngOnInit(): void {
    console.log('te', this.comparison);
  }
}
