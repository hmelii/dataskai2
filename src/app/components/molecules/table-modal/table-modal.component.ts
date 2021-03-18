import { Component, OnInit } from '@angular/core';
import { TableService } from '../../../services/table/table.service';

@Component({
  selector: 'app-table-modal',
  templateUrl: './table-modal.component.html',
  styleUrls: ['./table-modal.component.scss'],
})
export class TableModalComponent implements OnInit {
  isShown = false;
  heading = '';
  body = '';

  constructor(private tableService: TableService) {
    this.tableServicesSubscribeUpdates();
  }

  tableServicesSubscribeUpdates() {
    this.tableService.currentModalShownStageMessage.subscribe((isShown) => {
      setTimeout(() => {
        // этот таймаут нужен, для того чтобы не ложно не срабатывал клик вне попапа
        this.isShown = isShown;
      }, 100);
    });

    this.tableService.currentModalHeadingStageMessage.subscribe((heading) => {
      this.heading = heading;
    });

    this.tableService.currentModalBodyStageMessage.subscribe((body) => {
      this.body = body;
    });
  }

  ngOnInit(): void {}

  handleClose() {
    this.tableService.updateModalShownMessage(false);
    this.tableService.updateModalBodyMessage('');
    this.tableService.updateModalHeadingMessage('');
  }

  handleClickedOutside($event: Event) {
    if (this.isShown) {
      this.handleClose();
    }
  }
}
