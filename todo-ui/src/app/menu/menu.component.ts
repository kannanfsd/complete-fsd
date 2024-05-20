import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../hardcoded-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  isUserLoggedIn: boolean = false;
  constructor(public hcAuth: HardcodedAuthService) {

  }
  ngOnInit(): void {
    this.isUserLoggedIn = this.hcAuth.isUserLoggedIn();
  }
}
