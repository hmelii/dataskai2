import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAuthorsFilterComponent } from './task-authors-filter.component';

describe('TaskAuthorsFilterComponent', () => {
  let component: TaskAuthorsFilterComponent;
  let fixture: ComponentFixture<TaskAuthorsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskAuthorsFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAuthorsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
