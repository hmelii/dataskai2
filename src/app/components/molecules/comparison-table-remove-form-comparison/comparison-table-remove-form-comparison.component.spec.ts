import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonTableRemoveFormComparisonComponent } from './comparison-table-remove-form-comparison.component';

describe('ComparisonTableRemoveFormComparisonComponent', () => {
  let component: ComparisonTableRemoveFormComparisonComponent;
  let fixture: ComponentFixture<ComparisonTableRemoveFormComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisonTableRemoveFormComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonTableRemoveFormComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
