import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteSubmitsPageComponent } from './favorite-submits-page.component';

describe('FavoritesPageComponent', () => {
  let component: FavoriteSubmitsPageComponent;
  let fixture: ComponentFixture<FavoriteSubmitsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteSubmitsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteSubmitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
