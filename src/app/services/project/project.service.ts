import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';
import config from '../../config/config';
import {
  ProjectConfigInterface,
  ProjectInfoInterface,
  ProjectTasksInterface,
} from '../../interfaces/project/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectInfoStageMessage = new BehaviorSubject({
    loaded: false,
    loading: false,
  } as ProjectInfoInterface);
  currentProjectInfoStageMessage = this.projectInfoStageMessage.asObservable();

  private projectTasksStageMessage = new BehaviorSubject({
    loaded: false,
    loading: false,
  } as ProjectTasksInterface);
  currentProjectTasksStageMessage = this.projectTasksStageMessage.asObservable();

  private projectConfigStageMessage = new BehaviorSubject({
    loaded: false,
    loading: false,
  } as ProjectConfigInterface);
  currentProjectConfigStageMessage = this.projectConfigStageMessage.asObservable();

  constructor(private http: HttpClient) {}

  updateProjectInfoMessage(message: ProjectInfoInterface) {
    this.projectInfoStageMessage.next({
      ...this.projectInfoStageMessage.getValue(),
      ...message,
    });
  }

  updateProjectTasksMessage(message: ProjectTasksInterface) {
    this.projectTasksStageMessage.next({
      ...this.projectTasksStageMessage.getValue(),
      ...message,
    });
  }

  updateProjectConfigMessage(message: ProjectConfigInterface) {
    this.projectConfigStageMessage.next({
      ...this.projectConfigStageMessage.getValue(),
      ...message,
    });
  }

  fetchProjectInfo(projectInfoParams): Observable<ProjectInfoInterface> {
    const params = new HttpParams({
      fromObject: projectInfoParams,
    });

    return this.http
      .get<ProjectInfoInterface>(config.BASE_URL + '/assets/projectInfo.json', {
        params,
      })
      .pipe(
        delay(500), // исскуственная задержка
        catchError((error) => {
          // отлавливаем ошибку
          return throwError(error);
        })
      );
  }

  fetchProjectConfig(projectConfigParams): Observable<ProjectConfigInterface> {
    const params = new HttpParams({
      fromObject: projectConfigParams,
    });

    return this.http
      .get<ProjectConfigInterface>(
        config.BASE_URL + '/assets/projectConfig.json',
        {
          params,
        }
      )
      .pipe(
        delay(500), // исскуственная задержка
        catchError((error) => {
          // отлавливаем ошибку
          console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  fetchProjectTasks(projectTasksParams): Observable<ProjectTasksInterface> {
    const params = new HttpParams({
      fromObject: projectTasksParams,
    });

    return this.http
      .get<ProjectTasksInterface>(
        config.BASE_URL + '/assets/projectTasks.json',
        {
          params,
        }
      )
      .pipe(
        delay(500), // исскуственная задержка
        catchError((error) => {
          // отлавливаем ошибку
          console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  getProjectInfo(params = {}) {
    this.updateProjectInfoMessage({ loading: true });

    this.fetchProjectInfo(params).subscribe(
      (projectInfo: ProjectInfoInterface) => {
        this.updateProjectInfoMessage({
          ...projectInfo,
          loaded: true,
        });
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        this.updateProjectInfoMessage({
          loading: false,
        });
      }
    );
  }

  getProjectConfig(params = {}) {
    this.updateProjectConfigMessage({ loading: true });

    this.fetchProjectConfig(params).subscribe(
      (projectConfig: ProjectConfigInterface) => {
        this.updateProjectConfigMessage({
          ...projectConfig,
          loaded: true,
        });
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        this.updateProjectConfigMessage({
          loading: false,
        });
      }
    );
  }

  getProjectTasks(params = {}) {
    this.updateProjectTasksMessage({ loading: true });

    this.fetchProjectTasks(params).subscribe(
      (projectTasks: ProjectTasksInterface) => {
        this.updateProjectTasksMessage({
          ...projectTasks,
          loaded: true,
        });
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        this.updateProjectTasksMessage({
          loading: false,
        });
      }
    );
  }
}
