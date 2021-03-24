import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';
import config from '../../../config/config';
import { TaskSubmitsInterface } from '../../../interfaces/task/task.interface';
import { FeaturesInfoInterface } from '../../../interfaces/features-info/features-info.interface';

export interface FeaturesInfo {
  data: [];
}

@Injectable({
  providedIn: 'root',
})
export class FeaturesInfoService {
  private featuresInfoIDStageMessage = new BehaviorSubject(null);
  currentFeatureInfoIDStageMessage = this.featuresInfoIDStageMessage.asObservable();

  private featuresInfoStageMessage = new BehaviorSubject({
    loading: false,
    loaded: false,
  } as FeaturesInfoInterface);
  currentFeatureInfoStageMessage = this.featuresInfoStageMessage.asObservable();

  constructor(private http: HttpClient) {}

  updateFeaturesInfoIDMessage(message) {
    this.featuresInfoIDStageMessage.next(message);
  }

  updateFeaturesInfoMessage(message) {
    this.featuresInfoStageMessage.next({
      ...this.featuresInfoStageMessage.getValue(),
      ...message,
    });
  }

  fetchFeaturesInfo() {
    const {
      id,
      comparisonBaselineID = null,
    } = this.featuresInfoIDStageMessage.getValue();

    const baseline_submit: { [key: string]: string } = {};

    if (comparisonBaselineID) {
      baseline_submit.baseline_submit = comparisonBaselineID;
    }

    const params = new HttpParams({
      fromObject: {
        id,
        ...baseline_submit,
      },
    });

    return this.http
      .get<FeaturesInfo>(
        config.BASE_URL +
          (comparisonBaselineID
            ? config.TASK_FEATURES_INFO_WITH_COMPARISON_URL
            : config.TASK_FEATURES_INFO_URL),
        {
          params,
        }
      )
      .pipe(
        delay(500), // исскуственная задержка
        catchError((error) => {
          // отлавливаем ошибку
          return throwError(error);
        })
      );
  }

  getFeaturesInfo() {
    this.updateFeaturesInfoMessage({ loading: true });

    this.fetchFeaturesInfo().subscribe(
      (featuresInfo) => {
        this.updateFeaturesInfoMessage({
          ...featuresInfo,
          loaded: true,
        });
      },
      (error) => {},
      () => {
        this.updateFeaturesInfoMessage({
          loading: false,
        });
      }
    );
  }
}
