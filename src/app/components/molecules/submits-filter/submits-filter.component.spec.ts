import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitsFilterComponent } from './submits-filter.component';

describe('SubmitsFilterComponent', () => {
  let component: SubmitsFilterComponent;
  let fixture: ComponentFixture<SubmitsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
