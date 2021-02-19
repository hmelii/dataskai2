import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submits',
  templateUrl: './submits.component.html',
  styleUrls: ['./submits.component.scss']
})
export class SubmitsComponent implements OnInit {
  @Input() config;
  @Input() items;

  constructor() { }

  ngOnInit(): void {
  }

}
