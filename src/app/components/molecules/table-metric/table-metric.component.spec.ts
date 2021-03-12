import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMetricComponent } from './table-metric.component';

describe('TableMetricComponent', () => {
  let component: TableMetricComponent;
  let fixture: ComponentFixture<TableMetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMetricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
