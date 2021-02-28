import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesInfoComponent } from './features-info.component';

describe('FeaturesInfoComponent', () => {
  let component: FeaturesInfoComponent;
  let fixture: ComponentFixture<FeaturesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
