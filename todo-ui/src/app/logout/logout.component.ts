import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../hardcoded-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  constructor(private hcAuth: HardcodedAuthService) {
  }
  ngOnInit(): void {
    this.hcAuth.logout();
  }
}
