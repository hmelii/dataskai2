import { TestBed } from '@angular/core/testing';

import { ThemesService } from './themes.service';

describe('AuthorsService', () => {
  let service: ThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
