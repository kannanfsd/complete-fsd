import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usrName = 'Marikannan';
  passWrd = '';
  login() {
    console.log(this.usrName);
  }
}
