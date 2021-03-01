import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToBasketComponent } from './add-to-basket.component';

describe('AddToBasketComponent', () => {
  let component: AddToBasketComponent;
  let fixture: ComponentFixture<AddToBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
