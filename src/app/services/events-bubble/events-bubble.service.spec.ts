import { TestBed } from '@angular/core/testing';

import { EventsBubbleService } from './events-bubble.service';

describe('EventsBubbleService', () => {
  let service: EventsBubbleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsBubbleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
