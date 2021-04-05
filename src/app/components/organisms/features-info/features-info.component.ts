import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../../../services/features/features.service';
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

  constructor(private featuresService: FeaturesService) {
    this.subscribeFeaturesInfoIDUpdates();
    this.subscribeFeaturesInfoUpdates();
  }

  subscribeFeaturesInfoIDUpdates() {
    this.featuresService.currentFeatureInfoIDStageMessage.subscribe(
      (featureInfo) => {
        if (featureInfo && featureInfo.id) {
          setTimeout(() => {
            this.isShown = true;
          }, 100);
          this.featuresService.getFeaturesInfo();
        } else {
          this.isShown = false;
        }
      }
    );
  }

  subscribeFeaturesInfoUpdates() {
    this.featuresService.currentFeatureInfoStageMessage.subscribe(
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
    this.featuresService.updateFeaturesInfoIDMessage({ id: null });
    this.featuresService.updateFeaturesInfoMessage({ loaded: false });
    this.featuresService.deleteFeaturesInfoMessage();
  }

  handleClickedOutside($event: Event) {
    if (this.isShown) {
      this.handleClose();
    }
  }

  ngOnInit(): void {}
}
