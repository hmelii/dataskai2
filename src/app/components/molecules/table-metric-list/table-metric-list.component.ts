import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-metric-list',
  templateUrl: './table-metric-list.component.html',
  styleUrls: ['./table-metric-list.component.scss'],
})
export class TableMetricListComponent implements OnInit {
  @Input() metrics;
  constructor() {}

  ngOnInit(): void {}
}
