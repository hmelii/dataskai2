import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project/project.service';

@Component({
  selector: 'app-task-selection',
  templateUrl: './task-selection.component.html',
  styleUrls: ['./task-selection.component.scss'],
})
export class TaskSelectionComponent implements OnInit {
  isShow: boolean;
  tasks: Array<any> = [];
  selectedIndex = 0;

  constructor(private projectService: ProjectService) {
    this.isShow = false;
  }

  ngOnInit(): void {
    this.projectService.currentProjectStageMessage.subscribe((tasks) => {
      return (this.tasks = tasks);
    });
  }

  handleClick(): void {
    this.isShow = !this.isShow;
  }

  handleItemClick(i): void {
    this.selectedIndex = i;
  }

  onClickedOutside($event: Event) {
    if (this.isShow) {
      this.isShow = false;
    }
  }
}
