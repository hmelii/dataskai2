import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComparisonService } from '../../../services/comparison/comparison.service';

@Component({
  selector: 'app-add-to-comparison',
  templateUrl: './add-to-comparison.component.html',
  styleUrls: ['./add-to-comparison.component.scss'],
})
export class AddToComparisonComponent implements OnInit {
  isInComparison = false;
  @Input() id: string;

  constructor(private comparisonService: ComparisonService) {}

  ngOnInit(): void {
    this.updateIsInComparison();
  }

  updateIsInComparison() {
    this.comparisonService.currentComparisonIDSStageMessage.subscribe(
      (comparisonIDs) => {
        const findedIndex = comparisonIDs.findIndex((id) => id === this.id);
        this.isInComparison = findedIndex > -1;
      }
    );
  }

  handleClick() {
    this.comparisonService.updateComparisonIDSMessage(this.id);
  }
}
