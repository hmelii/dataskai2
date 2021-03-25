import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  search = '';
  isShown = false;
  isQuestionBubbleShown = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  toggleShown() {
    this.isShown = !this.isShown;
  }

  handleClickedOutside($event: Event) {
    if (this.isShown) {
      this.isShown = false;
    }
  }

  handleClickToggle() {
    this.toggleShown();
  }

  handleClickClose() {
    this.toggleShown();
  }

  handleToggleQuestion() {
    this.isQuestionBubbleShown = !this.isQuestionBubbleShown;
  }
}
