import { Injectable } from '@angular/core';
import { TokenContent } from '../models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {

  constructor() { }

  get(): TokenContent {
    const stringToken = window.sessionStorage.getItem('token');
    let token: TokenContent;
    if (stringToken) {
      token = JSON.parse(stringToken);
    }
    return token;
  }

  save(token: TokenContent): void {
    window.sessionStorage.setItem('token', JSON.stringify(token));
  }

  remove(): void {
    window.sessionStorage.removeItem('token');
  }

}
