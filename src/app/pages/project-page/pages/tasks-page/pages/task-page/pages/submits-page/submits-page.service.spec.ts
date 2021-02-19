import { TestBed } from '@angular/core/testing';

import { SubmitsPageService } from './submits-page.service';

describe('SubmitsPageService', () => {
  let service: SubmitsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
