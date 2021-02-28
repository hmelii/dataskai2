import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskInfoStageMessage = new BehaviorSubject([]);
  currentTaskInfoStageMessage = this.taskInfoStageMessage.asObservable();

  constructor(private http: HttpClient) {}

  updateTaskInfoMessage(message: []) {
    this.taskInfoStageMessage.next(message);
  }

  fetchTaskInfo(): Observable<any[]> {
    const params = new HttpParams({
      fromObject: { _limit: '2' },
    });

    return this.http
      .get<any[]>('/assets/taskInfo.json', { params })
      .pipe(
        delay(500), // исскуственная задержка
        catchError((error) => {
          // отлавливаем ошибку
          console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  fetchTaskConfig(): Observable<any[]> {
    const params = new HttpParams({
      fromObject: { _limit: '2' },
    });

    return this.http
      .get<any[]>('/assets/taskConfig.json', { params })
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
