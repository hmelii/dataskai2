import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';
import config from '../../config/config';
import { FeaturesInfoInterface } from '../../interfaces/features-info/features-info.interface';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

export interface FeaturesInfo {
  data: [];
}

@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  private featuresInfoIDStageMessage = new BehaviorSubject(null);
  currentFeatureInfoIDStageMessage = this.featuresInfoIDStageMessage.asObservable();

  private routeTaskID;

  private featuresInfoStageMessage = new BehaviorSubject({
    loading: false,
    loaded: false,
  } as FeaturesInfoInterface);
  currentFeatureInfoStageMessage = this.featuresInfoStageMessage.asObservable();

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.subscribeRouteChanges();
  }

  subscribeRouteChanges() {
    this.activatedRoute.params.subscribe(
      ({ taskID = null, submitID = null }) => {
        this.routeTaskID = taskID;
      }
    );
  }

  updateFeaturesInfoIDMessage(message) {
    this.featuresInfoIDStageMessage.next(message);
  }

  updateFeaturesInfoMessage(message) {
    this.featuresInfoStageMessage.next({
      ...this.featuresInfoStageMessage.getValue(),
      ...message,
    });
  }

  deleteFeaturesInfoMessage() {
    this.featuresInfoStageMessage.next({
      ...this.featuresInfoStageMessage.getValue(),
      data: [],
    });
  }

  fetchFeaturesInfo() {
    const {
      id,
      comparisonBaselineID = null,
      type,
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

    let url = environment.baseUrl + config.API_URL + config.API_VERSION;

    console.log('type', type);

    if (type === 'project') {
      url += config.TASK_FEATURES.replace('{task_name}', this.routeTaskID);
    } else if (type === 'task') {
      url += config.SUBMIT_FEATURES.replace('{submit_id}', id);
    }

    return this.http.get<FeaturesInfo>(url).pipe(
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
