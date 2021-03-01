import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonPageComponent } from './comparison-page.component';

describe('FavoritesPageComponent', () => {
  let component: ComparisonPageComponent;
  let fixture: ComponentFixture<ComparisonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComparisonPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
