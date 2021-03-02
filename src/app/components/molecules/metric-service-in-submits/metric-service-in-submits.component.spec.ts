import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricServiceInSubmitsComponent } from './metric-service-in-submits.component';

describe('MetricServiceInSubmitsComponent', () => {
  let component: MetricServiceInSubmitsComponent;
  let fixture: ComponentFixture<MetricServiceInSubmitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricServiceInSubmitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricServiceInSubmitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
