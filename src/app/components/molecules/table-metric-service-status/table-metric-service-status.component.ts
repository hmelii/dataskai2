import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-metric-service-status',
  templateUrl: './table-metric-service-status.component.html',
  styleUrls: ['./table-metric-service-status.component.scss'],
})
export class TableMetricServiceStatusComponent implements OnInit {
  @Input() status;

  constructor() {}

  ngOnInit(): void {}
}
