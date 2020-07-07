import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UtilityService } from '../services';
import { TokenContent } from '../models';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    const accessToken = this.activatedRoute.snapshot.paramMap.get('access_token');
    const refreshToken = this.activatedRoute.snapshot.paramMap.get('refresh_token');
    if (this.activatedRoute.snapshot.paramMap.has('access_token')) {
      const token: TokenContent = {
        access_token: accessToken,
        refresh_token: refreshToken
      };
      this.authenticationService.login(token);
    }

  }

}
