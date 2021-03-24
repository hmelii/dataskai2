import { Component, Input, OnInit } from '@angular/core';
import { FeaturesInfoService } from '../../organisms/features-info/features-info.service';

@Component({
  selector: 'app-table-features',
  templateUrl: './table-features.component.html',
  styleUrls: ['./table-features.component.scss'],
})
export class TableFeaturesComponent implements OnInit {
  @Input() id: string;
  @Input() text: string;
  @Input() comparison;
  @Input() comparisonBaselineID;

  constructor(private featuresInfoService: FeaturesInfoService) {}

  ngOnInit(): void {
    console.log('this.comparison', this.comparison);
  }

  handleClick() {
    this.featuresInfoService.updateFeaturesInfoIDMessage({
      id: this.id,
      comparisonBaselineID: this.comparisonBaselineID,
    });
  }
}
