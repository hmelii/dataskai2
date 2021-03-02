import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsInSubmitsComponent } from './comments-in-submits.component';

describe('CommentsInSubmitsComponent', () => {
  let component: CommentsInSubmitsComponent;
  let fixture: ComponentFixture<CommentsInSubmitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsInSubmitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsInSubmitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
