import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskInfoService {

  private taskInfoStageMessage = new BehaviorSubject([]);
  currentTaskInfoStageMessage = this.taskInfoStageMessage.asObservable();

  constructor() { }

  updateTaskInfoMessage(message: []) {
    this.taskInfoStageMessage.next(message)
  }
}
