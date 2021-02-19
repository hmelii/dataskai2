import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.component.html',
  styleUrls: ['./main-tabs.component.scss']
})
export class MainTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('tab3').addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('tab3').classList.add('main-tabs-item--active');
      document.getElementById('tab1').classList.remove('main-tabs-item--active');
      document.getElementById('popup').style.opacity = '1';
      document.getElementById('popup').style.visibility = 'visible';
    });

    document.getElementById('tab1').addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('tab1').classList.add('main-tabs-item--active');
      document.getElementById('tab3').classList.remove('main-tabs-item--active');
      document.getElementById('popup').style.opacity = '0';
      document.getElementById('popup').style.visibility = 'hidden';
    })
  }

}
