import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthService } from '../auth/basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private baAuth: BasicAuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let basicAuthString = this.baAuth.getAuthenticatedToken();
    let username = this.baAuth.getAuthenticatedUser();
    if(basicAuthString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthString
        }
      });
    }
    return next.handle(request);
  }
}
