import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { fetchGuard } from './fetch.guard';

describe('fetchGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => fetchGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
