import { Component, Input, OnInit } from '@angular/core';
import { FeaturesService } from '../../../services/features/features.service';

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
  @Input() type;

  constructor(private featuresService: FeaturesService) {}

  ngOnInit(): void {}

  handleClick() {
    this.featuresService.deleteFeaturesInfoMessage();

    this.featuresService.updateFeaturesInfoIDMessage({
      id: this.id,
      comparisonBaselineID: this.comparisonBaselineID,
      type: this.type,
    });
  }
}
