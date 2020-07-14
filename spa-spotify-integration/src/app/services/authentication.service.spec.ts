import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { TokenManagerService } from './token-manager.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  let tokenManagerServiceMock: any = {};
  let routerMock: any = {};
  let httpClientMock: any = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        {
          provide: TokenManagerService,
          useValue: tokenManagerServiceMock
        },
        {
          provide: Router,
          useValue: routerMock
        },
        {
          provide: HttpClient,
          useValue: httpClientMock
        },
      ]
    });
    service = TestBed.inject(AuthenticationService);
    tokenManagerServiceMock = TestBed.inject(TokenManagerService);
    routerMock = TestBed.inject(Router);
    httpClientMock = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
