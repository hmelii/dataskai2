import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMetricListComponent } from './table-metric-list.component';

describe('TableMetricListComponent', () => {
  let component: TableMetricListComponent;
  let fixture: ComponentFixture<TableMetricListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMetricListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMetricListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
