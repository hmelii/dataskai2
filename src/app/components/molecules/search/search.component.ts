import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task/task.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  search = '';
  isShown = false;
  isQuestionBubbleShown = false;

  constructor(private taskService: TaskService) {}

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
    this.taskService.updateTaskMetaMessage({
      search: this.search,
    });
  }
}
