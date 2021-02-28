import { TestBed } from '@angular/core/testing';

import { SubmitsService } from './submits.service';

describe('ProjectService', () => {
  let service: SubmitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
