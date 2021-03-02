import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparedSubmitsComponent } from './compared-submits.component';

describe('ComparisonComponent', () => {
  let component: ComparedSubmitsComponent;
  let fixture: ComponentFixture<ComparedSubmitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComparedSubmitsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparedSubmitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
