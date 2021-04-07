import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task/task.service';
import { ProjectService } from '../../../services/project/project.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() component;
  search = '';
  isShown = false;
  isQuestionBubbleShown = false;

  constructor(
    private taskService: TaskService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {}

  toggleShown() {
    this.isShown = !this.isShown;
  }

  handleClickedOutside($event: Event) {
    if (this.isShown) {
      this.isShown = false;
    }
  }

  handleClickToggle() {
    this.toggleShown();
  }

  handleClickClose() {
    this.toggleShown();
  }

  handleToggleQuestion() {
    this.isQuestionBubbleShown = !this.isQuestionBubbleShown;
  }

  handleEnter() {
    if (this.component === 'task') {
      this.taskService.updateTaskMetaMessage({
        search: this.search,
      });
    } else if (this.component === 'project') {
      this.projectService.updateProjectMetaMessage({
        search: this.search,
      });
    }
  }
}
