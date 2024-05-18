import { Component } from '@angular/core';

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
  login() {
    if(this.usrName==='testing' && this.passWrd==='testing') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    console.log(this.usrName);
  }
}
