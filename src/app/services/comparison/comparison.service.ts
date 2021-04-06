import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { LocalStorage } from '../../storage/interfaces/local-storage.interface';

import { HttpClient, HttpParams } from '@angular/common/http';
import config from '../../config/config';
import { catchError, delay } from 'rxjs/operators';
import { ComparisonSubmitsInterface } from '../../interfaces/comparison-submits/comparison-submits.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ComparisonService {
  private comparisonIDSStageMessage = new BehaviorSubject({});
  currentComparisonIDSStageMessage = this.comparisonIDSStageMessage.asObservable();

  private comparisonSubmitsStageMessage = new BehaviorSubject({
    loaded: false,
    loading: false,
  } as ComparisonSubmitsInterface);
  currentComparisonSubmitsStageMessage = this.comparisonSubmitsStageMessage.asObservable();

  constructor(private localStorage: LocalStorage, private http: HttpClient) {
    this.checkLocalStorage();
  }

  updateComparisonIDSMessage(message, init?) {
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

  updateComparisonSubmitsMessage(message) {
    this.comparisonSubmitsStageMessage.next({
      ...this.comparisonSubmitsStageMessage.getValue(),
      ...message,
    });
  }

  removeComparedSubmits() {
    this.updateComparisonSubmitsMessage({
      loaded: false,
      loading: false,
      data: null,
    });
  }

  fetchComparisonSubmits(
    comparisonSubmitsParams
  ): Observable<ComparisonSubmitsInterface> {
    let { ids, baseline_submit = null, taskID } = comparisonSubmitsParams;

    if (!baseline_submit) {
      baseline_submit = ids[0];
    }

    const params = new HttpParams({
      fromObject: {
        ids: ids.join(','),
        baseline_submit,
      },
    });

    return this.http
      .get<ComparisonSubmitsInterface>(
        environment.baseUrl +
          config.API_URL +
          config.API_VERSION +
          config.COMPARISON_SUBMITS_URL,
        {
          params,
        }
      )
      .pipe(
        delay(config.FETCH_DELAY), // исскуственная задержка
        catchError((error) => {
          // отлавливаем ошибку
          console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  getComparisonSubmits(params = {}) {
    this.updateComparisonSubmitsMessage({ loading: true });
    this.fetchComparisonSubmits(params).subscribe(
      (comparisonSubmits: ComparisonSubmitsInterface) => {
        this.updateComparisonSubmitsMessage({
          ...comparisonSubmits,
          loaded: true,
        });
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        this.updateComparisonSubmitsMessage({
          loading: false,
        });
      }
    );
  }

  checkLocalStorage() {
    const localStorageValue = this.localStorage.getItem('Comparison');

    if (!localStorageValue) {
      return;
    }

    const localStorageValuesArray = JSON.parse(localStorageValue);

    if (
      !localStorageValuesArray ||
      !(typeof localStorageValuesArray === 'object')
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
