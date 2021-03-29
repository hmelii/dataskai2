import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsBubbleComponent } from './events-bubble.component';

describe('EventsBubbleComponent', () => {
  let component: EventsBubbleComponent;
  let fixture: ComponentFixture<EventsBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
