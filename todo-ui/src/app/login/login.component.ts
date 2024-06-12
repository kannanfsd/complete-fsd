import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../hardcoded-auth.service';
import { BasicAuthService } from '../service/auth/basic-auth.service';

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
    private hcAuth: HardcodedAuthService,
    private basicAuth: BasicAuthService
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

  handleBasicAuthLogin() {
    console.log('Hit to Queen.');
    this.basicAuth.executeBasicAuthentication(this.usrName, this.passWrd)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['welcome',this.usrName]);
            this.invalidLogin = false;
          },
          error => {
            console.log(error);
            this.invalidLogin = true;
          }
        )
  }

}
