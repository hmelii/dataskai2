import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsBubbleService {
  private eventsBubbleStageMessage = new BehaviorSubject(null);
  currentEventsBubbleStageMessage = this.eventsBubbleStageMessage.asObservable();

  constructor() {}

  updateEventsBubbleStageMessage(message: string) {
    this.eventsBubbleStageMessage.next(message);
  }
}
