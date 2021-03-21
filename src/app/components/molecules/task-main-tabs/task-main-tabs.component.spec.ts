import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMainTabsComponent } from './task-main-tabs.component';

describe('MainTabsComponent', () => {
  let component: TaskMainTabsComponent;
  let fixture: ComponentFixture<TaskMainTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskMainTabsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskMainTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
