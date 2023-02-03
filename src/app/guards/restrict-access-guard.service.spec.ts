import { TestBed } from '@angular/core/testing';

import { RestrictAccessGuardService } from './restrict-access-guard.service';

describe('RestrictAccessGuardService', () => {
  let service: RestrictAccessGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestrictAccessGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
