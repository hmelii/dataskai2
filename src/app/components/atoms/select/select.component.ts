import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  isShow: boolean;
  selectedValue = null;

  @Input() options: [] = null;

  constructor() {
    this.isShow = false;
  }

  ngOnInit(): void {}

  handleClick() {
    this.isShow = !this.isShow;
    console.log(this.isShow);
  }

  onClickedOutside($event: Event) {
    if (this.isShow) {
      this.isShow = false;
    }
  }
}
