import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TaskService } from '../../../services/task/task.service';
import { TableService } from '../../../services/table/table.service';

@Component({
  selector: 'app-tags',
  templateUrl: './table-tags.component.html',
  styleUrls: ['./table-tags.component.scss'],
})
export class TableTagsComponent implements OnInit, OnChanges {
  @Input() text: string;

  constructor(
    private taskService: TaskService,
    private tableService: TableService
  ) {}

  ngOnChanges(changes: SimpleChanges) {}

  ngOnInit(): void {}

  handleClick() {
    this.tableService.updateModalHeadingMessage('Tags');

    this.tableService.updateModalBodyMessage(this.text);
    this.tableService.updateModalShownMessage(true);
  }
}
