import { TestBed } from '@angular/core/testing';

import { BackendRoutingService } from './backend-routing.service';

describe('BackendRoutingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendRoutingService = TestBed.get(BackendRoutingService);
    expect(service).toBeTruthy();
  });
});
