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
  selector: 'app-table-feature-mining-comments',
  templateUrl: './table-feature-mining-comments.component.html',
  styleUrls: ['./table-feature-mining-comments.component.scss'],
})
export class TableFeatureMiningCommentsComponent implements OnInit, OnChanges {
  @Input() text: string;

  constructor(
    private taskService: TaskService,
    private tableService: TableService
  ) {}

  ngOnChanges(changes: SimpleChanges) {}

  ngOnInit(): void {}

  handleClick() {
    this.tableService.updateModalHeadingMessage('Feature mining comments');

    this.tableService.updateModalBodyMessage(this.text);
    this.tableService.updateModalShownMessage(true);
  }
}
