import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {
  title = "Tasks";

  constructor() { }

  ngOnInit(): void {
  }

}
