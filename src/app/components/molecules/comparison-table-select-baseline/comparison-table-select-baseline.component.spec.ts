import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonTableSelectBaselineComponent } from './comparison-table-select-baseline.component';

describe('ComparisonTableSelectBaselineComponent', () => {
  let component: ComparisonTableSelectBaselineComponent;
  let fixture: ComponentFixture<ComparisonTableSelectBaselineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisonTableSelectBaselineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonTableSelectBaselineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
