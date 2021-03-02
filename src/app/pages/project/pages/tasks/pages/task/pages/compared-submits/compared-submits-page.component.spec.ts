import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparedSubmitsPageComponent } from './compared-submits-page.component';

describe('FavoritesPageComponent', () => {
  let component: ComparedSubmitsPageComponent;
  let fixture: ComponentFixture<ComparedSubmitsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComparedSubmitsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparedSubmitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
