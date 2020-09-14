import { TestBed } from '@angular/core/testing';

import { BaseAuthGuardService } from './base-auth-guard.service';

describe('BaseAuthGuardService', () => {
  let service: BaseAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
