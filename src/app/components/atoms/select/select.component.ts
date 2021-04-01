import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { OptionInterface } from '../../../interfaces/select/select.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit, OnChanges {
  isShow: boolean;
  selectedOption: OptionInterface = null;

  @Input() options: OptionInterface[] = null;
  @Output() onHandleChange: EventEmitter<OptionInterface> = new EventEmitter<
    OptionInterface
  >();

  constructor() {
    this.isShow = false;
  }

  ngOnInit(): void {}

  handleClick() {
    this.isShow = !this.isShow;
  }

  ngOnChanges(): void {
    if (
      this.options &&
      !this.options.filter((option) => option.selected).length
    ) {
      this.selectedOption = this.options[0];
    } else if (this.options) {
      this.selectedOption = this.options.find((option) => option.selected);
    }
  }

  handleChange(option: OptionInterface): void {
    this.selectedOption = option;
    this.onHandleChange.emit(option);
  }

  onClickedOutside($event: Event) {
    if (this.isShow) {
      this.isShow = false;
    }
  }
}
