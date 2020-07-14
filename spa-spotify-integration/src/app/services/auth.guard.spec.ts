import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authenticationServiceMock: any = {};
  let routerMock: any = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {
          provide: AuthenticationService,
          useValue: authenticationServiceMock
        },
        {
          provide: Router,
          useValue: routerMock
        }
      ]
    });
    guard = TestBed.inject(AuthGuard);
    authenticationServiceMock = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
