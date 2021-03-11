import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from '../../../services/task/task.service';
import { TaskConfigInterface } from '../../../interfaces/task/task.interface';

@Component({
  selector: 'app-meta-panel',
  templateUrl: './meta-panel.component.html',
  styleUrls: ['./meta-panel.component.scss'],
})
export class MetaPanelComponent implements OnInit {
  config: TaskConfigInterface = null;
  rows: number[] = null;
  rowsDefault: number;

  @Input() totalPages: number = null;
  @Input() currentPage: number = null;

  constructor(private taskService: TaskService) {
    this.taskService.currentTaskConfigStageMessage.subscribe(
      (config: TaskConfigInterface) => {
        this.config = config;
        if (config.data) {
          this.rows = config.data.rows_per_page_values;
          this.rowsDefault = config.data.rows_per_page_default;
        }
      }
    );
  }

  ngOnInit(): void {}
}
