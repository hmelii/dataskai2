import { Component, OnInit } from '@angular/core';
import { EventsBubbleService } from '../../../services/events-bubble/events-bubble.service';

@Component({
  selector: 'app-events-bubble',
  templateUrl: './events-bubble.component.html',
  styleUrls: ['./events-bubble.component.scss'],
})
export class EventsBubbleComponent implements OnInit {
  isShown = false;
  message = '';
  timeout;
  time = 3; //sec
  constructor(private eventsBubbleService: EventsBubbleService) {
    this.subscribeEventsBubbleServiceUpdates();
  }

  subscribeEventsBubbleServiceUpdates() {
    this.eventsBubbleService.currentEventsBubbleStageMessage.subscribe(
      (message) => {
        if (message) {
          this.isShown = true;
          this.message = message;

          clearTimeout(this.timeout);

          this.timeout = setTimeout(() => {
            this.isShown = false;
            this.timeout = setTimeout(() => {
              this.eventsBubbleService.updateEventsBubbleStageMessage(null);
            }, 300);
          }, this.time * 1000);
        }
      }
    );
  }

  ngOnInit(): void {}
}
