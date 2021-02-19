import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, delay } from "rxjs/operators";

export interface Config {
  id?: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SubmitsPageService {

  constructor(private http: HttpClient) {  }

  fetchConfig(): Observable<Config[]> {



    const params = new HttpParams({
      fromObject: { _limit: '2'}
    });

    return this.http.get<Config[]>('/assets/taskConfig.json', { params })
      .pipe(
        delay(500), // исскуственная задержка
        catchError(error => { // отлавливаем ошибку
          console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  fetchSubmits(): Observable<Config[]> {



    const params = new HttpParams({
      fromObject: { _limit: '2'}
    });

    return this.http.get<Config[]>('/assets/taskSubmits.json', { params })
      .pipe(
        delay(500), // исскуственная задержка
        catchError(error => { // отлавливаем ошибку
          console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }
}
