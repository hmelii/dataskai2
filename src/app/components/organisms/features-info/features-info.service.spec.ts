import { TestBed } from '@angular/core/testing';

import { FeaturesInfoService } from './features-info.service';

describe('FeatureInfoService', () => {
  let service: FeaturesInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturesInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
