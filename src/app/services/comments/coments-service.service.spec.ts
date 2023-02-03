import { TestBed } from '@angular/core/testing';

import { ComentsServiceService } from './coments-service.service';

describe('ComentsServiceService', () => {
  let service: ComentsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
