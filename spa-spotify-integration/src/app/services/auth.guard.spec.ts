import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './authentication.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authenticationServiceMock: any = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {
        provide: AuthenticationService,
        useValue: authenticationServiceMock
      }]
    });
    guard = TestBed.inject(AuthGuard);
    authenticationServiceMock = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
