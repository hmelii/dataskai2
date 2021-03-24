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

  constructor(private featuresInfoService: FeaturesInfoService) {
    this.subscribeFeaturesInfoIDUpdates();
    this.subscribeFeaturesInfoUpdates();
  }

  subscribeFeaturesInfoIDUpdates() {
    this.featuresInfoService.currentFeatureInfoIDStageMessage.subscribe(
      (featureInfo) => {
        if (featureInfo && featureInfo.id) {
          setTimeout(() => {
            this.isShown = true;
          }, 100);
          this.featuresInfoService.getFeaturesInfo();
        } else {
          this.isShown = false;
        }
      }
    );
  }

  subscribeFeaturesInfoUpdates() {
    this.featuresInfoService.currentFeatureInfoStageMessage.subscribe(
      ({ loaded, loading, data }) => {
        if (loaded && !loading) {
          if (data) {
            this.featuresNames = data;
          }
        }
      }
    );
  }

  handleClose() {
    this.featuresInfoService.updateFeaturesInfoIDMessage({ id: null });
    this.featuresInfoService.updateFeaturesInfoMessage({ loaded: false });
  }

  handleClickedOutside($event: Event) {
    if (this.isShown) {
      this.handleClose();
    }
  }

  ngOnInit(): void {}
}
