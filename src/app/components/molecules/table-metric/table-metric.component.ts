import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-metric',
  templateUrl: './table-metric.component.html',
  styleUrls: ['./table-metric.component.scss'],
})
export class TableMetricComponent implements OnInit {
  @Input() metric = null;

  constructor() {}

  ngOnInit(): void {}
}
