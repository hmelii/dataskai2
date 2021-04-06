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

    console.log(
      'this.featuresInfoStageMessage.getValue()',
      this.featuresInfoStageMessage.getValue()
    );
  }

  fetchFeaturesInfo() {
    const {
      id,
      comparisonBaselineID = null,
      type,
    } = this.featuresInfoIDStageMessage.getValue();

    console.log('type', type);
    console.log('id', id);
    console.log('comparisonBaselineID', comparisonBaselineID);

    const baseline_submit: { [key: string]: string } = {};

    if (comparisonBaselineID) {
      baseline_submit.baseline_submit = comparisonBaselineID;
    }

    const params = new HttpParams({
      fromObject: {
        ...baseline_submit,
      },
    });

    let url = environment.baseUrl + config.API_URL + config.API_VERSION;

    if (type === 'project') {
      url += config.TASK_FEATURES.replace('{task_name}', this.routeTaskID);
    } else if (
      type === 'task' ||
      (type === 'comparison' && !comparisonBaselineID)
    ) {
      url += config.SUBMIT_FEATURES.replace('{submit_id}', id);
    } else if (type === 'comparison' && comparisonBaselineID) {
      url += config.COMPARISON_SUBMIT_FEATURES.replace('{submit_id}', id);
    } else {
      return;
    }

    return this.http
      .get<FeaturesInfo>(url, { params })
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
