import { Component, OnInit } from '@angular/core';
import { CheckboxInterface } from '../../../../interfaces/checkbox/checkbox.interface';
import { TaskService } from '../../../../services/task/task.service';
import { ProjectService } from '../../../../services/project/project.service';

@Component({
  selector: 'app-project-authors-filter',
  templateUrl: '../authors-filter.component.html',
  styleUrls: ['../authors-filter.component.scss'],
})
export class ProjectAuthorsFilterComponent implements OnInit {
  isShow = false;
  authors: CheckboxInterface[];
  all: CheckboxInterface = {
    value: 'all',
    checked: true,
    label: 'all',
  };

  selectedAuthors: (string | number)[] = [];

  constructor(
    private taskService: TaskService,
    private projectService: ProjectService
  ) {
    this.subscribeProjectInfoUpdates();
  }

  subscribeProjectInfoUpdates() {
    this.projectService.currentProjectInfoStageMessage.subscribe(
      ({ loaded, loading, data }) => {
        if (loaded && !loading) {
          if (data && data.authors) {
            this.authors = data.authors.map((author) => ({
              value: author,
              checked: true,
              label: author,
            }));
          }

          this.selectedAuthors = this.authors.map(
            (author: CheckboxInterface) => author.value
          );
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

    this.projectService.updateProjectMetaMessage({
      authors: this.selectedAuthors.join(','),
    });
  }
}
