import { Component, OnInit } from '@angular/core';
import { CheckboxInterface } from '../../../interfaces/checkbox/checkbox.interface';
import { TaskConfigInterface } from '../../../interfaces/task/task.interface';
import { TaskService } from '../../../services/task/task.service';

@Component({
  selector: 'app-table-col-switcher',
  templateUrl: './table-col-switcher.component.html',
  styleUrls: ['./table-col-switcher.component.scss'],
})
export class TableColSwitcherComponent implements OnInit {
  isShow: boolean;
  columns: CheckboxInterface[];
  config: TaskConfigInterface;

  all: CheckboxInterface = {
    value: 'all',
    label: 'all',
    checked: true,
  };

  selectedColumns: (string | number)[] = [];

  constructor(private taskService: TaskService) {
    this.isShow = false;

    this.taskService.currentTaskConfigStageMessage.subscribe(
      (config: TaskConfigInterface) => {
        this.config = config;
        if (config.data && config.data.columns) {
          this.columns = config.data.columns.map((column) => ({
            value: column.id,
            label: column.name,
            checked: column.shown,
          }));

          this.all.checked =
            this.columns.filter((column) => !column.checked).length === 0;

          const checkedColumns = this.columns.filter(
            (column: CheckboxInterface) => column.checked
          );

          this.selectedColumns = checkedColumns.map((column) => column.value);
        }
      }
    );
  }

  ngOnInit(): void {}

  handleClick() {
    this.isShow = !this.isShow;
  }

  handleClickedOutside($event: Event) {
    if (this.isShow) {
      this.isShow = false;
    }
  }

  handleChange($event: boolean, currentColumn?: CheckboxInterface) {
    if (!currentColumn) {
      if ($event === true) {
        this.all.checked = true;
        this.columns = this.columns.map((author) => ({
          ...author,
          checked: true,
        }));
        this.selectedColumns = this.columns.map(
          (author: CheckboxInterface) => author.value
        );
      } else {
        this.all.checked = false;
        this.columns = this.columns.map((author) => ({
          ...author,
          checked: false,
        }));
        this.selectedColumns = [];
      }
    } else {
      const findedSelectedAuthorIndex = this.selectedColumns.findIndex(
        (author) => author === currentColumn.value
      );

      if ($event === true) {
        if (findedSelectedAuthorIndex < 0) {
          this.selectedColumns.push(currentColumn.value);
        }
        currentColumn.checked = true;
      } else {
        // this.all.checked = false;
        this.selectedColumns.splice(findedSelectedAuthorIndex, 1);
        currentColumn.checked = false;
      }
      this.all.checked =
        this.selectedColumns.length === this.config.data.columns.length;
    }

    this.taskService.updateTaskConfigMessage({
      ...this.config,
      data: {
        ...this.config.data,
        columns: this.config.data.columns.map((column) => ({
          ...column,
          shown: this.selectedColumns.includes(column.id),
        })),
      },
    });
  }
}
