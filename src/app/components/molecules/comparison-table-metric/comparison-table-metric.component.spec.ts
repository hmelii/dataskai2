import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonTableMetricComponent } from './comparison-table-metric.component';

describe('ComparisonTableMetricComponent', () => {
  let component: ComparisonTableMetricComponent;
  let fixture: ComponentFixture<ComparisonTableMetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisonTableMetricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonTableMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
