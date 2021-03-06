import { Injectable } from '@angular/core';
import { TokenManagerService } from './token-manager.service';
import { TokenContent } from '../models';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private tokenManager: TokenManagerService,
    private router: Router,
    private httpClient: HttpClient
  ) { }

  /**
   * @returns boolean
   */
  isLoggedIn(): boolean {
    return this.tokenManager.get() !== undefined;
  }

  login(tokenContent: TokenContent): void {
    this.tokenManager.save(tokenContent);
    this.router.navigate(['']);
  }

  getAuthToken(): TokenContent {
    return this.tokenManager.get();
  }

  refreshToken(): Observable<any> {
    const token: TokenContent = this.getAuthToken();
    const body = {
      refresh_token: token.refresh_token
    };
    return new Observable((subscriber: Subscriber<any>) => {
      return this.httpClient.post(`${environment.authApiBaseUrl}/refresh_token`, body).subscribe((response: any) => {
        token.access_token = response.access_token;
        this.tokenManager.save(token);
        subscriber.next();
        subscriber.complete();
      });
    });
  }

  logout(): void {
    this.tokenManager.remove();
  }

}
