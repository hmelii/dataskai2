import { Component, Input, OnInit } from '@angular/core';
import { SubmitAttachmentsInterface } from '../../../interfaces/submit/submit.interface';

@Component({
  selector: 'app-table-attachments',
  templateUrl: './table-attachments.component.html',
  styleUrls: ['./table-attachments.component.scss'],
})
export class TableAttachmentsComponent implements OnInit {
  @Input() attachments: SubmitAttachmentsInterface = null;
  constructor() {}

  ngOnInit(): void {}
}
