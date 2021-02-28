import { Component, OnInit } from '@angular/core';
import { FeaturesInfoService } from "./features-info.service";
export interface FeaturesInfo {
  data: [];
}
@Component({
  selector: 'app-features-info',
  templateUrl: './features-info.component.html',
  styleUrls: ['./features-info.component.scss']
})
export class FeaturesInfoComponent implements OnInit {
  isShown = false;
  featuresInfo: FeaturesInfo;
  featuresNames: [] = [];
  loading = false;
  error = null;

  constructor(private featuresInfoService: FeaturesInfoService) { }

  ngOnInit(): void {
    this.featuresInfoService.currentFeatureInfoStageMessage.subscribe(featuresNames => {
      this.isShown = !!featuresNames;
      //return this.authors = authors
      // this.featuresNames = featuresNames
      console.log('test')
      if (featuresNames) {
        console.log(featuresNames.join(',').length)
      }
      if (this.isShown) {
        this.fetchFeaturesInfo(featuresNames);
      }
    });
  }

  fetchFeaturesInfo(featuresNames: []) {
    this.loading = true;
    this.featuresInfoService.fetchFeaturesInfo(featuresNames).subscribe((featuresInfo: FeaturesInfo) => {
      this.featuresInfo = featuresInfo;
      this.featuresNames = this.featuresInfo.data;
      this.loading = false;
    }, error => {
      this.error = error.message;
    }, () => {
      console.log('Выполняется в конце стрима в любом случае');
    });
  }

  handleClose() {
    this.featuresInfoService.updateFeaturesInfoMessage(null);
  }


}
