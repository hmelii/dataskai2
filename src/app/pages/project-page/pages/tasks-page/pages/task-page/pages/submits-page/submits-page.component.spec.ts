import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitsPageComponent } from './submits-page.component';

describe('ProjectPageComponent', () => {
  let component: SubmitsPageComponent;
  let fixture: ComponentFixture<SubmitsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
