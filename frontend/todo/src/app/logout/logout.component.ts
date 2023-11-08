import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService
  ) {}
  ngOnInit(): void {
    // this.router.navigate(['login']);
    this.hardcodedAuthenticationService.logout();
  }
}
