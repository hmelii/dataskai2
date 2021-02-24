import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private authorsStageMessage = new BehaviorSubject([]);
  currentAuthorsStageMessage = this.authorsStageMessage.asObservable();

  constructor() { }

  updateAuthorsMessage(message: []) {
    this.authorsStageMessage.next(message)
  }
}
