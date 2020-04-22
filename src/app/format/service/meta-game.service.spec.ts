import { TestBed } from '@angular/core/testing';

import { MetaGameService } from './meta-game.service';

describe('MetaGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetaGameService = TestBed.get(MetaGameService);
    expect(service).toBeTruthy();
  });
});
