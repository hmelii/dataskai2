import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent implements OnInit {

  dynamic = 'positive';

  @Input() number: number;


  constructor() { }


  ngOnInit(): void {
    this.dynamic = this.number >= 0 ? 'positive' : 'negative';
  }

}
