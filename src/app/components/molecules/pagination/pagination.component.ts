import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() currentPage: number = null;
  @Input() totalPages: number = null;
  @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.handleChangePage();
  }

  ngOnChanges(): void {
    if (this.currentPage && this.totalPages) {
    }
  }

  handlePageClick(i: number) {
    if (i > -1 && i < this.totalPages) this.currentPage = i + 1;
    this.handleChangePage();
  }

  handlePrevPageClick() {
    this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : 1;
    this.handleChangePage();
  }

  handleChangePage() {
    this.onPageChange.emit(this.currentPage);
  }

  handleNextPageClick() {
    this.currentPage =
      this.currentPage < this.totalPages
        ? this.currentPage + 1
        : this.totalPages;
    this.handleChangePage();
  }
}
