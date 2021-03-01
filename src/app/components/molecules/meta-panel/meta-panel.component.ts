import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task/task.service';
import { TaskConfigInterface } from '../../../interfaces/task/task.interface';

@Component({
  selector: 'app-meta-panel',
  templateUrl: './meta-panel.component.html',
  styleUrls: ['./meta-panel.component.scss'],
})
export class MetaPanelComponent implements OnInit {
  config: {} = null;
  rows: number[] = null;

  constructor(private taskService: TaskService) {
    this.taskService.currentTaskConfigStageMessage.subscribe(
      (config: TaskConfigInterface) => {
        if (config.data) {
          return (this.rows = config.data.rows_per_page_values);
        }
      }
    );
  }

  ngOnInit(): void {}
}
