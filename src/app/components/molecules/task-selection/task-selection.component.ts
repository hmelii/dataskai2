import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project/project.service';
import { ProjectInfoInterface } from '../../../interfaces/project/project.interface';
import { TaskEnum } from '../../../enums/routes/task.enum';
import { TasksEnum } from '../../../enums/routes/tasks.enum';
import { ProjectEnum } from '../../../enums/routes/project.enum';
import { MainEnum } from '../../../enums/routes/main.enum';
import { TaskService } from '../../../services/task/task.service';
import { TaskInfoInterface } from '../../../interfaces/task/task.interface';

@Component({
  selector: 'app-task-selection',
  templateUrl: './task-selection.component.html',
  styleUrls: ['./task-selection.component.scss'],
})
export class TaskSelectionComponent implements OnInit {
  isShow: boolean;
  tasks: string[] = null;
  selectedIndex = 0;
  routeSubmits = TaskEnum.Submits;
  routeTasks = TasksEnum.Tasks;
  routeProject = ProjectEnum.Project;
  routeMain = MainEnum.Self;
  taskName = null;

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService
  ) {
    this.isShow = false;
    this.subscribeProjectInfoUpdates();
    this.subscribeTasksInfoUpdates();
  }

  ngOnInit(): void {}

  subscribeTasksInfoUpdates() {
    this.taskService.currentTaskInfoStageMessage.subscribe(
      ({ data }: TaskInfoInterface) => {
        if (!data || !data.task_name) {
          return;
        }

        this.taskName = data.task_name;
      }
    );
  }

  subscribeProjectInfoUpdates() {
    this.projectService.currentProjectInfoStageMessage.subscribe(
      ({ loaded, loading, data }: ProjectInfoInterface) => {
        if (!loaded && !loading) {
          this.projectService.getProjectInfo();
        }
        if (!data || !data.tasks) {
          return;
        }
        this.tasks = data.tasks.names;
      }
    );
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
