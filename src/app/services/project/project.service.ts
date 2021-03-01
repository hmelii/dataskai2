import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';
import config from '../../config/config';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectStageMessage = new BehaviorSubject([]);
  currentProjectStageMessage = this.projectStageMessage.asObservable();

  constructor(private http: HttpClient) {}

  updateProjectMessage(message: []) {
    this.projectStageMessage.next(message);
  }

  fetchProjectInfo(): Observable<any[]> {
    const params = new HttpParams({
      fromObject: { _limit: '2' },
    });

    return this.http
      .get<any[]>(config.API + '/assets/projectInfo.json', { params })
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
