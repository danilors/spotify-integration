import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authentication: AuthenticationService, private route: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authentication.isLoggedIn()) {
      return true;
    } else {
      window.open('http://localhost:8888/login', '_self');
      return false;
    }
  }
}
