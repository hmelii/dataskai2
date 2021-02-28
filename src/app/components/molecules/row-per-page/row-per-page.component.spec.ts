import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowPerPageComponent } from './row-per-page.component';

describe('RowPerPageComponent', () => {
  let component: RowPerPageComponent;
  let fixture: ComponentFixture<RowPerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowPerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowPerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
