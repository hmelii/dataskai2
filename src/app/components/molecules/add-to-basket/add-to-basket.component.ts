import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task/task.service';

@Component({
  selector: 'app-add-to-basket',
  templateUrl: './add-to-basket.component.html',
  styleUrls: ['./add-to-basket.component.scss'],
})
export class AddToBasketComponent implements OnInit {
  @Input() id: string;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  handleClick() {
    this.taskService.deleteTaskSubmitMessage(this.id);
  }
}
