import { Component, Input, OnInit } from '@angular/core';
import { AuthorsService } from '../../../services/authors/authors.service';
import { ProjectService } from '../../../services/project/project.service';
import { TaskService } from '../../../services/task/task.service';
import { TaskSubmitsInterface } from '../../../interfaces/task/task.interface';

@Component({
  selector: 'app-favorite-submits',
  templateUrl: './favorite-submits.component.html',
  styleUrls: ['./favorite-submits.component.scss'],
})
export class FavoriteSubmitsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
