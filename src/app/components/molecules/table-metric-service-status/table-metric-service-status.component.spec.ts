import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMetricServiceStatusComponent } from './table-metric-service-status.component';

describe('TableMetricServiceStatusComponent', () => {
  let component: TableMetricServiceStatusComponent;
  let fixture: ComponentFixture<TableMetricServiceStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMetricServiceStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMetricServiceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
