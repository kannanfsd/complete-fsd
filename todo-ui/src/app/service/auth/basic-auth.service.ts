import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http: HttpClient) { }

  authenticate(user:string, pass:string): boolean {
    //console.log('Before: '+this.isUserLoggedIn())
    if(user==='jack' && pass === 'rose'){
      sessionStorage.setItem('authUser', user);
      //console.log('After: '+this.isUserLoggedIn())
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authUser');
    return !(user===null)
  }

  logout() {
    sessionStorage.removeItem('authUser');
  }

  executeBasicAuthentication(user:string, pass:string) {
    console.log('Hit to King.');
    return this.http.get<AuthenticationBean>(
      `http://localhost:8090/basicauth`,
      {headers: new HttpHeaders({
        Authorization: 'Basic ' + window.btoa(user + ':' + pass)
      })}
    ).pipe(
      map(
        data => {
          sessionStorage.setItem('authUser', user);
        }
      )
    )
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
