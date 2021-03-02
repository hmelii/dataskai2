import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedSubmitsPageComponent } from './deleted-submits-page.component';

describe('DeletedPageComponent', () => {
  let component: DeletedSubmitsPageComponent;
  let fixture: ComponentFixture<DeletedSubmitsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletedSubmitsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedSubmitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
