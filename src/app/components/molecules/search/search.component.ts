import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  search = '';
  isShown = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  handleClick() {
    this.isShown = !this.isShown;
  }

  handleClickedOutside($event: Event) {
    if (this.isShown) {
      this.isShown = false;
    }
  }
}
