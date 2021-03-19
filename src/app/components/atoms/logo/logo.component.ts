import { Component, OnInit } from '@angular/core';
import { MainEnum } from '../../../enums/routes/main.enum';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  routeMain = MainEnum.Self;
  constructor() {}

  ngOnInit(): void {}
}
