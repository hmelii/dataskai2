import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTaskTabsComponent } from './project-main-tabs.component';

describe('MainTabsComponent', () => {
  let component: MainTaskTabsComponent;
  let fixture: ComponentFixture<MainTaskTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainTaskTabsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTaskTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
