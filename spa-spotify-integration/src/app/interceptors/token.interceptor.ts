import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { AuthenticationService } from '../services';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

    refreshTokenInProgress = false;
    tokenRefreshedSubject = new Subject();
    tokenRefreshed$ = this.tokenRefreshedSubject.asObservable();

    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tokenRequest = this.addAuthHeader(request);
        return next.handle(tokenRequest).pipe(catchError(error => {
            return this.handleResponseError(error, request, next);
        }));
    }

    handleResponseError(error, request?, next?: HttpHandler): Observable<HttpEvent<any>> {
        if (error.status === 401 && error.error.error.message === 'The access token expired') {
            return this.refreshToken().pipe(
                switchMap(() => {
                    request = this.addAuthHeader(request);
                    return next.handle(request);
                }),
                catchError(e => {
                    this.authenticationService.logout();
                    return this.handleResponseError(e);
                }));
        }
        return throwError(error);
    }


    refreshToken(): Observable<any> {
        if (this.refreshTokenInProgress) {
            return new Observable(observer => {
                this.tokenRefreshed$.subscribe(() => {
                    observer.next();
                    observer.complete();
                });
            });
        } else {
            this.refreshTokenInProgress = true;
            return this.authenticationService.refreshToken().pipe(
                tap(() => {
                    this.refreshTokenInProgress = false;
                    this.tokenRefreshedSubject.next();
                }),
                catchError((e) => {
                    this.refreshTokenInProgress = false;
                    return throwError(e);
                }));
        }
    }


    addAuthHeader(request): HttpRequest<any> {
        const token = this.authenticationService.getAuthToken();
        let newHeaders = request.headers;
        if (token) {
            newHeaders = newHeaders.append('Authorization', `Bearer ${token.access_token}`);
        }
        return request.clone({ headers: newHeaders });
    }

}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
};