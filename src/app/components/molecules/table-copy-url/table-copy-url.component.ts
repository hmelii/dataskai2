import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-table-copy-url',
  templateUrl: './table-copy-url.component.html',
  styleUrls: ['./table-copy-url.component.scss'],
})
export class TableCopyUrlComponent implements OnInit {
  isActive = false;
  timeout;
  @Input() id: string;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  copyUrl() {
    this.isActive = true;
    const { protocol, hostname, pathname } = location;
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = `${protocol}//${hostname}${pathname}/${this.id}`;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => (this.isActive = false), 3000);
  }
}
