import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SubmitsService {
  private submitsStageMessage = new BehaviorSubject([]);
  currentSubmitsStageMessage = this.submitsStageMessage.asObservable();

  constructor(private http: HttpClient) {}

  updateSubmitsMessage(submits: []) {
    this.submitsStageMessage.next(submits);
  }

  fetchSubmits(): Observable<any[]> {
    const params = new HttpParams({
      fromObject: { _limit: '2' },
    });

    return this.http
      .get<any[]>('/assets/taskSubmits.json', { params })
      .pipe(
        delay(500), // исскуственная задержка
        catchError((error) => {
          // отлавливаем ошибку
          console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }
}
