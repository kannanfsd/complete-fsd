import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor(private router: Router) { }

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
}
