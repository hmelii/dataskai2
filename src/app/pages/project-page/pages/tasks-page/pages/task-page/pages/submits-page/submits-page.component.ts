import { Component, OnInit } from '@angular/core';
import { SubmitsPageService } from "./submits-page.service";

@Component({
  selector: 'app-tasks-page',
  templateUrl: './submits-page.component.html',
  styleUrls: ['./submits-page.component.scss'],
})
export class SubmitsPageComponent implements OnInit {
  title = "Task";

  loading = false;
  config = null;
  submits = null;
  error = null;

  constructor( private submitsService: SubmitsPageService) {
  }


  ngOnInit(): void {
    this.fetchConfig();
    this.fetchSubmits();
  }

  fetchConfig() {
    this.loading = true;
    this.submitsService.fetchConfig()
      .subscribe((config) => {
        this.config = config;
        this.loading = false;
      }, error => {
        this.error = error.message;
      }, () => {
        console.log('Выполняется в конце стрима в любом случае');
      });

  }

  fetchSubmits() {
    this.loading = true;
    this.submitsService.fetchSubmits()
      .subscribe((submits) => {
        this.submits = submits;
        this.loading = false;
      }, error => {
        this.error = error.message;
      }, () => {
        console.log('Выполняется в конце стрима в любом случае');
      });

  }

}
