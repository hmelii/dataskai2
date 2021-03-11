import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';
import config from '../../config/config';
import {
  TaskConfigInterface,
  TaskSubmitsInterface,
} from '../../interfaces/task/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskSubmitsStageMessage = new BehaviorSubject(null);
  currentTaskSubmitsStageMessage = this.taskSubmitsStageMessage.asObservable();

  private taskInfoStageMessage = new BehaviorSubject([]);
  currentTaskInfoStageMessage = this.taskInfoStageMessage.asObservable();

  private taskConfigStageMessage = new BehaviorSubject({});
  currentTaskConfigStageMessage = this.taskConfigStageMessage.asObservable();

  constructor(private http: HttpClient) {}

  updateTaskInfoMessage(message: []) {
    this.taskInfoStageMessage.next(message);
  }

  fetchTaskInfo(): Observable<any[]> {
    const params = new HttpParams({
      fromObject: { _limit: '2' },
    });

    return this.http
      .get<any[]>(config.API + '/assets/taskInfo.json', { params })
      .pipe(
        delay(500), // исскуственная задержка
        catchError((error) => {
          // отлавливаем ошибку
          console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  fetchTaskConfig(): Observable<TaskConfigInterface> {
    const params = new HttpParams({
      fromObject: { _limit: '2' },
    });

    return this.http
      .get<TaskConfigInterface>(config.API + '/assets/taskConfig.json', {
        params,
      })
      .pipe(
        delay(500), // исскуственная задержка
        catchError((error) => {
          // отлавливаем ошибку
          console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  updateTaskConfigMessage(message: TaskConfigInterface) {
    this.taskConfigStageMessage.next(message);
  }

  updateTaskSubmitsMessage(taskSubmits: TaskSubmitsInterface) {
    this.taskSubmitsStageMessage.next(taskSubmits);
  }

  fetchTaskSubmits(getTaskParams: {} = {}): Observable<TaskSubmitsInterface> {
    const params = new HttpParams({
      fromObject: { ...getTaskParams },
    });

    return this.http
      .get<TaskSubmitsInterface>(config.API + '/assets/taskSubmits.json', {
        params,
      })
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
