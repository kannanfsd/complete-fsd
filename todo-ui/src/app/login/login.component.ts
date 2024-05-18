import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}

  login() {
    if(this.usrName==='testing' && this.passWrd==='testing') {
      //redirect to welcome page
      this.router.navigate(['welcome',this.usrName]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    console.log(this.usrName);
  }
}
