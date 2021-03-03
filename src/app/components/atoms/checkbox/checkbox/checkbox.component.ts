import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() checked: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleChange($event: Event) {
    const target = $event.target as HTMLInputElement;
    this.onChange.emit(target.checked);
  }
}
