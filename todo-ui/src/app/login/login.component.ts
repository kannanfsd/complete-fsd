import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usrName = '';
  passWrd = '';
  errorMessage = 'Invalid credentials';
  invalidLogin = false;

  //Router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router: Router,
    private hcAuth: HardcodedAuthService
  ) {}

  login() {
    if(this.hcAuth.authenticate(this.usrName, this.passWrd)) {
      //redirect to welcome page
      this.router.navigate(['welcome',this.usrName]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    console.log(this.usrName);
  }
}
