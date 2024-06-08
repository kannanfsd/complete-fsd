import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http: HttpClient) { }

  executeBasicAuthentication(user:string, pass:string) {
    let basicAuth = 'Basic ' + window.btoa(user + ':' + pass);
    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`,
      {headers: new HttpHeaders({
        Authorization: basicAuth
      })}
    ).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, user);
          sessionStorage.setItem(TOKEN, basicAuth);
        }
      ));
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken():any {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user===null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

}

export class AuthenticationBean {
  constructor(public message: string) {}
}
