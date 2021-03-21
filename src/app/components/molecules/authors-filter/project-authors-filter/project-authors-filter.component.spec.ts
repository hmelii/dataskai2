import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAuthorsFilterComponent } from './project-authors-filter.component';

describe('ProjectAuthorsFilterComponent', () => {
  let component: ProjectAuthorsFilterComponent;
  let fixture: ComponentFixture<ProjectAuthorsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectAuthorsFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAuthorsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
