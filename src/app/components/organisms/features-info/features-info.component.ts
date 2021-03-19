import { Component, OnInit } from '@angular/core';
import { FeaturesInfoService } from './features-info.service';
export interface FeaturesInfo {
  data: [];
}
@Component({
  selector: 'app-features-info',
  templateUrl: './features-info.component.html',
  styleUrls: ['./features-info.component.scss'],
})
export class FeaturesInfoComponent implements OnInit {
  isShown = false;
  featuresInfo: FeaturesInfo;
  featuresNames: [] = [];
  loading = false;
  error = null;

  constructor(private featuresInfoService: FeaturesInfoService) {}

  ngOnInit(): void {
    this.featuresInfoService.currentFeatureInfoStageMessage.subscribe(
      (submitID) => {
        setTimeout(() => {
          // этот таймаут нужен, для того чтобы не срабатывал ложный клик вне окна
          this.isShown = !!submitID;
        }, 100);

        if (submitID) {
          this.fetchFeaturesInfo(submitID);
        }
      }
    );
  }

  fetchFeaturesInfo(submitID: string) {
    this.loading = true;
    this.featuresInfoService.fetchFeaturesInfo(submitID).subscribe(
      (featuresInfo: FeaturesInfo) => {
        this.featuresInfo = featuresInfo;
        this.featuresNames = this.featuresInfo.data;
        this.loading = false;
      },
      (error) => {
        this.error = error.message;
      },
      () => {}
    );
  }

  handleClose() {
    this.featuresInfoService.updateFeaturesInfoMessage(null);
  }

  handleClickedOutside($event: Event) {
    if (this.isShown) {
      this.handleClose();
    }
  }
}
