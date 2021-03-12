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
  private taskSubmitsStageMessage = new BehaviorSubject({
    loaded: false,
    loading: false,
  } as TaskSubmitsInterface);
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
      .get<any[]>(config.BASE_URL + config.TASK_INFO_URL, { params })
      .pipe(
        delay(config.FETCH_DELAY), // исскуственная задержка
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
      .get<TaskConfigInterface>(config.BASE_URL + config.TASK_CONFIG_URL, {
        params,
      })
      .pipe(
        delay(config.FETCH_DELAY), // исскуственная задержка
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

  updateTaskSubmitsMessage(message) {
    this.taskSubmitsStageMessage.next({
      ...this.taskSubmitsStageMessage.getValue(),
      ...message,
    });
  }

  fetchTaskSubmits(taskParams: {} = {}): Observable<TaskSubmitsInterface> {
    const params = new HttpParams({
      fromObject: { ...taskParams },
    });

    return this.http
      .get<TaskSubmitsInterface>(config.BASE_URL + config.TASK_SUBMITS_URL, {
        params,
      })
      .pipe(
        delay(config.FETCH_DELAY), // исскуственная задержка
        catchError((error) => {
          // отлавливаем ошибку
          console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  getSubmits(params = {}) {
    this.updateTaskSubmitsMessage({ loading: true });

    this.fetchTaskSubmits(params).subscribe(
      (taskSubmits: TaskSubmitsInterface) => {
        this.updateTaskSubmitsMessage({
          ...taskSubmits,
          loaded: true,
        });
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        this.updateTaskSubmitsMessage({
          loading: false,
        });
      }
    );
  }
}
