import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  // declare variable
  // isUserLoggedIn: boolean = false;
  constructor(
    public hardcodedAuthenticationService: HardcodedAuthenticationService
  ) {}
  ngOnInit(): void {
    // find out if user has logged in
    // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }
}
