import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedSubmitsComponent } from './deleted-submits.component';

describe('DeletedSubmitsComponent', () => {
  let component: DeletedSubmitsComponent;
  let fixture: ComponentFixture<DeletedSubmitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedSubmitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedSubmitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
