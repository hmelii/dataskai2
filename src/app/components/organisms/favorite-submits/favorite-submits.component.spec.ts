import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteSubmitsComponent } from './favorite-submits.component';

describe('SubmitsComponent', () => {
  let component: FavoriteSubmitsComponent;
  let fixture: ComponentFixture<FavoriteSubmitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteSubmitsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteSubmitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
