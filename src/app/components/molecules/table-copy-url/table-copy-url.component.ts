import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EventsBubbleService } from '../../../services/events-bubble/events-bubble.service';

@Component({
  selector: 'app-table-copy-url',
  templateUrl: './table-copy-url.component.html',
  styleUrls: ['./table-copy-url.component.scss'],
})
export class TableCopyUrlComponent implements OnInit {
  isActive = false;
  timeout;
  submitID = null;
  @Input() id: string;

  constructor(
    private eventsBubbleService: EventsBubbleService,
    private location: Location,
    private activateRoute: ActivatedRoute
  ) {
    this.activateRoute.params.subscribe((params) => {
      this.submitID = params['submitID'];
    });
  }

  ngOnInit(): void {}

  copyUrl() {
    const { protocol, hostname, pathname } = location;

    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = `${protocol}//${hostname}${pathname.replace(
      `/${this.submitID}`,
      ''
    )}/${this.id}`;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.eventsBubbleService.updateEventsBubbleStageMessage('Link copied');
  }
}
