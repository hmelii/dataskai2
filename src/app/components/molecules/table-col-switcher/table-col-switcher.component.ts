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
  metrics: CheckboxInterface[];
  config: TaskConfigInterface;

  all: CheckboxInterface = {
    value: 'all',
    checked: false,
  };

  selectedAuthors: (string | number)[] = [];

  constructor(private taskService: TaskService) {
    this.isShow = false;

    this.taskService.currentTaskConfigStageMessage.subscribe(
      (config: TaskConfigInterface) => {
        this.config = config;
        if (config.data) {
          this.metrics = config.data.columns.map((column) => ({
            value: column.name,
            label: column.name,
            checked: false,
          }));
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

  handleChange($event: boolean, currentAuthor?: CheckboxInterface) {
    if (!currentAuthor) {
      if ($event === true) {
        this.all.checked = true;
        this.metrics = this.metrics.map((author) => ({
          ...author,
          checked: true,
        }));
        this.selectedAuthors = this.metrics.map(
          (author: CheckboxInterface) => author.value
        );
      } else {
        this.all.checked = false;
        this.metrics = this.metrics.map((author) => ({
          ...author,
          checked: false,
        }));
        this.selectedAuthors = [];
      }
    } else {
      const findedSelectedAuthorIndex = this.selectedAuthors.findIndex(
        (author) => author === currentAuthor.value
      );
      if ($event === true) {
        if (findedSelectedAuthorIndex < 0) {
          this.selectedAuthors.push(currentAuthor.value);
        }
        currentAuthor.checked = true;
      } else {
        this.all.checked = false;
        this.selectedAuthors.splice(findedSelectedAuthorIndex, 1);
        currentAuthor.checked = false;
      }

      if (this.metrics.length === this.selectedAuthors.length) {
        this.all.checked = true;
      }
    }
  }
}
