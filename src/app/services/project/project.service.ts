import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectStageMessage = new BehaviorSubject([]);
  currentProjectStageMessage = this.projectStageMessage.asObservable();

  constructor() { }

  updateProjectMessage(message: []) {
    this.projectStageMessage.next(message)
  }
}
