import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private modalShownStageMessage = new BehaviorSubject(false);
  currentModalShownStageMessage = this.modalShownStageMessage.asObservable();

  private modalHeadingStageMessage = new BehaviorSubject('');
  currentModalHeadingStageMessage = this.modalHeadingStageMessage.asObservable();

  private modalBodyStageMessage = new BehaviorSubject('');
  currentModalBodyStageMessage = this.modalBodyStageMessage.asObservable();

  constructor() {}

  updateModalShownMessage(message) {
    this.modalShownStageMessage.next(message);
  }

  updateModalHeadingMessage(message) {
    this.modalHeadingStageMessage.next(message);
  }

  updateModalBodyMessage(message) {
    this.modalBodyStageMessage.next(message);
  }
}
