import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let activatedRouteMock: any = {
    snapshot: {
      paramMap: {
        get: (param: string) => param,
        has: () => true
      }
    }
  };
  let authenticationServiceMock: any = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock
        },
        {
          provide: AuthenticationService,
          useValue: authenticationServiceMock
        }
      ]
    })
      .compileComponents();
    authenticationServiceMock = TestBed.inject(AuthenticationService);
    activatedRouteMock = TestBed.inject(ActivatedRoute);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.start = jasmine.createSpy('start').and.callThrough();
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //authenticationServiceMock.login = jasmine.createSpy('login').and.callThrough();
});
