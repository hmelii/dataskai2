import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() currentPage: number = null;
  @Input() totalPages: number = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/project/tasks/123/submits'], {
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge',
    });
  }

  ngOnChanges(): void {
    if (this.currentPage && this.totalPages) {
      console.log(
        'this.currentPage && this.totalPages',
        this.currentPage,
        this.totalPages
      );
    }
  }

  handlePageClick(i: number) {
    if (i > 0 && i < this.totalPages) this.currentPage = i + 1;
  }

  handlePrevPageClick() {
    this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : 1;
    this.router.navigate(['/project/tasks/123/submits'], {
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge',
    });
  }

  handleNextPageClick() {
    this.currentPage =
      this.currentPage < this.totalPages
        ? this.currentPage + 1
        : this.totalPages;
    this.router.navigate(['/project/tasks/123/submits'], {
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge',
    });
  }
}
