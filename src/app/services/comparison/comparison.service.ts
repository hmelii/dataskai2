import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorage } from '../../storage/interfaces/local-storage.interface';

@Injectable({
  providedIn: 'root',
})
export class ComparisonService {
  private comparisonIDSStageMessage = new BehaviorSubject({});
  currentComparisonIDSStageMessage = this.comparisonIDSStageMessage.asObservable();

  constructor(private localStorage: LocalStorage) {
    this.checkLocalStorage();
  }

  updateComparisonIDSMessage(message, init?) {
    console.log(message);
    if (init) {
      this.comparisonIDSStageMessage.next(message as []);
      return;
    }
    const oldState = this.comparisonIDSStageMessage.getValue();

    let newState = { ...oldState };

    if (!newState[message.taskID]) {
      newState[message.taskID] = [];
    }

    const findedIndex = newState[message.taskID].findIndex(
      (item) => item === message.submitID
    );

    if (findedIndex > -1) {
      newState[message.taskID] = newState[message.taskID].filter(
        (item) => item !== message.submitID
      );
    } else {
      newState[message.taskID].push(message.submitID);
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

    if (
      !localStorageValuesArray ||
      !(
        typeof localStorageValuesArray === 'object' &&
        localStorageValuesArray !== null
      )
    ) {
      return;
    }

    this.updateComparisonIDSMessage(localStorageValuesArray, true);
  }

  updateLocalStorage() {
    const comparisonIDs = this.comparisonIDSStageMessage.getValue();

    this.localStorage.setItem('Comparison', JSON.stringify(comparisonIDs));
  }
}
