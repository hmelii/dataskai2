import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../../services/authors/authors.service';
import { CheckboxInterface } from '../../../../interfaces/checkbox/checkbox.interface';
import { TaskService } from '../../../../services/task/task.service';
import { ProjectService } from '../../../../services/project/project.service';

@Component({
  selector: 'app-task-authors-filter',
  templateUrl: '../authors-filter.component.html',
  styleUrls: ['../authors-filter.component.scss'],
})
export class TaskAuthorsFilterComponent implements OnInit {
  isShow: boolean;
  authors: CheckboxInterface[];
  all: CheckboxInterface = {
    value: 'all',
    checked: false,
    label: 'all',
  };

  selectedAuthors: (string | number)[] = [];

  constructor(
    private taskService: TaskService,
    private projectService: ProjectService
  ) {
    this.isShow = false;
    this.subscribeTaskInfoUpdates();
  }

  subscribeTaskInfoUpdates() {
    this.taskService.currentTaskInfoStageMessage.subscribe(
      ({ loaded, loading, data }) => {
        if (loaded && !loading) {
          if (data) {
            this.authors = data.authors.map((author) => ({
              value: author,
              checked: false,
              label: author,
            }));
          }
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
        this.authors = this.authors.map((author) => ({
          ...author,
          checked: true,
        }));
        this.selectedAuthors = this.authors.map(
          (author: CheckboxInterface) => author.value
        );
      } else {
        this.all.checked = false;
        this.authors = this.authors.map((author) => ({
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

      if (this.authors.length === this.selectedAuthors.length) {
        this.all.checked = true;
      }
    }
  }
}
