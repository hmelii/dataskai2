import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-comparison',
  templateUrl: './add-to-comparison.component.html',
  styleUrls: ['./add-to-comparison.component.scss'],
})
export class AddToComparisonComponent implements OnInit {
  isInComparison = false;

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.isInComparison = !this.isInComparison;
  }
}
