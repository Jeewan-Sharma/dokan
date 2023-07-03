import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { preventCheckoutGuard } from './prevent-checkout.guard';

describe('preventCheckoutGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => preventCheckoutGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
