import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';
import config from '../../config/config';
import {
  TaskConfigInterface,
  TaskInfoInterface,
  TaskSubmitsInterface,
} from '../../interfaces/task/task.interface';
import { LocalStorage } from '../../storage/interfaces/local-storage.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private localStorageValues = null;

  private taskSubmitsStageMessage = new BehaviorSubject({
    loaded: false,
    loading: false,
  } as TaskSubmitsInterface);
  currentTaskSubmitsStageMessage = this.taskSubmitsStageMessage.asObservable();

  private taskInfoStageMessage = new BehaviorSubject({
    loaded: false,
    loading: false,
  } as TaskInfoInterface);
  currentTaskInfoStageMessage = this.taskInfoStageMessage.asObservable();

  private taskConfigStageMessage = new BehaviorSubject({
    loaded: false,
    loading: false,
  } as TaskConfigInterface);
  currentTaskConfigStageMessage = this.taskConfigStageMessage.asObservable();

  constructor(private http: HttpClient, private localStorage: LocalStorage) {
    this.checkLocalStorage();
  }

  updateTaskInfoMessage(message) {
    this.taskInfoStageMessage.next({
      ...this.taskInfoStageMessage.getValue(),
      ...message,
    });
  }

  fetchTaskInfo(taskInfoParams): Observable<TaskInfoInterface> {
    const params = new HttpParams({
      fromObject: taskInfoParams,
    });

    return this.http
      .get<TaskInfoInterface>(config.BASE_URL + config.TASK_INFO_URL, {
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

  fetchTaskConfig(taskParams): Observable<TaskConfigInterface> {
    const params = new HttpParams({
      fromObject: {
        ...taskParams,
      },
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

  updateTaskConfigMessage(message) {
    this.taskConfigStageMessage.next({
      ...this.taskConfigStageMessage.getValue(),
      ...message,
    });

    if (message.data) {
      this.updateLocalStorage();
    }
  }

  checkLocalStorage() {
    const localStorageValue = this.localStorage.getItem('TaskColumnsConfig');

    if (!localStorageValue) {
      return;
    }

    const localStorageValues = JSON.parse(localStorageValue);

    if (!localStorageValues) {
      return;
    }
    this.localStorageValues = localStorageValues;
  }

  updateLocalStorage() {
    const taskConfig = this.taskConfigStageMessage.getValue();

    const taskColumnsConfig = {};

    taskColumnsConfig[
      taskConfig.data.task_name
    ] = taskConfig.data.columns.reduce(function (acc, cur, i) {
      acc[cur.id] = cur;
      return acc;
    }, {});

    this.localStorage.setItem(
      'TaskColumnsConfig',
      JSON.stringify(taskColumnsConfig)
    );
  }

  updateTaskSubmitsMessage(message) {
    this.taskSubmitsStageMessage.next({
      ...this.taskSubmitsStageMessage.getValue(),
      ...message,
    });
  }

  deleteTaskSubmitMessage(id) {
    const oldStage = this.taskSubmitsStageMessage.getValue();
    const newStage = {
      ...oldStage,
      data: {
        ...oldStage.data,
        submits: oldStage.data.submits.filter((submit) => submit.id !== id),
      },
    };
    this.taskSubmitsStageMessage.next(newStage);
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

  getTaskSubmits(params = {}) {
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

  getTaskConfig(params = {}) {
    this.updateTaskConfigMessage({ loading: true });

    this.fetchTaskConfig(params).subscribe(
      (taskConfig: TaskConfigInterface) => {
        let modifiedTaskConfig;
        if (
          this.localStorageValues &&
          this.localStorageValues[taskConfig.data.task_name]
        ) {
          // если у нас уже есть данные в локалсторадже берём оттуда
          const currentTask = this.localStorageValues[
            taskConfig.data.task_name
          ];
          modifiedTaskConfig = {
            ...taskConfig,
            data: {
              ...taskConfig.data,
              columns: taskConfig.data.columns.map((column, index) => ({
                ...column,
                index: currentTask[column.id].index,
                shown: currentTask[column.id].shown,
                width: currentTask[column.id].width,
              })),
            },
          };
        } else {
          modifiedTaskConfig = {
            ...taskConfig,
            data: {
              ...taskConfig.data,
              columns: taskConfig.data.columns.map((column, index) => ({
                ...column,
                index: index + 1, // прибавляет 1, потому что у нас ещё есть колонка с номерами
                shown: true,
                width: 168,
              })),
            },
          };
        }

        this.updateTaskConfigMessage({
          ...modifiedTaskConfig,
          loaded: true,
        });
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        this.updateTaskConfigMessage({
          loading: false,
        });
      }
    );
  }

  getTaskInfo(params = {}) {
    this.updateTaskInfoMessage({ loading: true });

    this.fetchTaskInfo(params).subscribe(
      (taskInfo: TaskInfoInterface) => {
        this.updateTaskInfoMessage({
          ...taskInfo,
          loaded: true,
        });
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        this.updateTaskInfoMessage({
          loading: false,
        });
      }
    );
  }
}
