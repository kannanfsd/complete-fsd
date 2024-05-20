import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor(private router: Router) { }

  authenticate(user:string, pass:string): boolean {
    if(user==='jack' && pass === 'rose'){
      return true;
    }
    return false;
  }
}
