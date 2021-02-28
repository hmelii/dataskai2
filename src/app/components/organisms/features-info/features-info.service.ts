import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';

export interface FeaturesInfo {
  data: [];
}

@Injectable({
  providedIn: 'root',
})
export class FeaturesInfoService {
  private featuresInfoStageMessage = new BehaviorSubject(null);
  currentFeatureInfoStageMessage = this.featuresInfoStageMessage.asObservable();

  constructor(private http: HttpClient) {}

  updateFeaturesInfoMessage(message: []) {
    this.featuresInfoStageMessage.next(message);
  }

  fetchFeaturesInfo(featuresNames: []) {
    const params = new HttpParams({
      fromObject: { ids: featuresNames.join(',') },
    });

    return this.http
      .get<FeaturesInfo>('/assets/taskFeaturesInfo.json', { params })
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
