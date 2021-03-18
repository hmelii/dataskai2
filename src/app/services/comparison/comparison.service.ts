import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorage } from '../../storage/interfaces/local-storage.interface';

@Injectable({
  providedIn: 'root',
})
export class ComparisonService {
  private comparisonIDSStageMessage = new BehaviorSubject([]);
  currentComparisonIDSStageMessage = this.comparisonIDSStageMessage.asObservable();

  constructor(private localStorage: LocalStorage) {
    this.checkLocalStorage();
  }

  updateComparisonIDSMessage(message: string | [], init?) {
    if (init) {
      this.comparisonIDSStageMessage.next(message as []);
      return;
    }
    const oldState = this.comparisonIDSStageMessage.getValue();

    const findedIndex = oldState.findIndex((item) => item === message);
    let newState;

    if (findedIndex > -1) {
      newState = oldState.filter((item) => item !== message);
    } else {
      newState = [...oldState, message];
    }

    this.comparisonIDSStageMessage.next(newState);
    this.updateLocalStorage();
  }

  checkLocalStorage() {
    const localStorageValue = this.localStorage.getItem('Comparison');

    if (!localStorageValue) {
      return;
    }

    const localStorageValuesArray = JSON.parse(localStorageValue);

    if (!localStorageValuesArray || !localStorageValuesArray.length) {
      return;
    }

    this.updateComparisonIDSMessage(localStorageValuesArray, true);
  }

  updateLocalStorage() {
    const comparisonIDs = this.comparisonIDSStageMessage.getValue();

    this.localStorage.setItem('Comparison', JSON.stringify(comparisonIDs));
  }
}
