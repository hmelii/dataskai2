import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToComparisonComponent } from './add-to-comparison.component';

describe('AddToComparisonComponent', () => {
  let component: AddToComparisonComponent;
  let fixture: ComponentFixture<AddToComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
