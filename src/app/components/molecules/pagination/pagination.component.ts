import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() currentPage: number = null;
  @Input() totalPages: number = null;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.currentPage && this.totalPages) {
      console.log(
        'this.currentPage && this.totalPages',
        this.currentPage,
        this.totalPages
      );
    }
  }
}
