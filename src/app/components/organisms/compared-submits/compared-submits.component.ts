import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../services/authors/authors.service';
import { ProjectService } from '../../../services/project/project.service';
import { TaskService } from '../../../services/task/task.service';
import { TaskSubmitsInterface } from '../../../interfaces/task/task.interface';
import { SubmitInterface } from '../../../interfaces/submit/submit.interface';

@Component({
  selector: 'app-compared-submits',
  templateUrl: './compared-submits.component.html',
  styleUrls: ['./compared-submits.component.scss'],
})
export class ComparedSubmitsComponent implements OnInit {
  loading = {
    projectInfo: false,
    taskInfo: false,
    taskConfig: false,
    taskSubmits: false,
    config: false,
  };

  loaded = {
    projectInfo: false,
    taskConfig: false,
    taskInfo: false,
    taskSubmits: false,
    config: false,
  };

  taskSubmits: SubmitInterface[] = null;
  error = null;
  projectInfo = null;
  taskInfo = null;
  config = null;

  constructor(
    private authorsService: AuthorsService,
    private projectService: ProjectService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {}
}
