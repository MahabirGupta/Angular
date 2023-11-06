import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // set default username and password
  username = 'tiger';
  password = ''; //password is empty
  constructor() {}

  ngOnInit(): void {}

  handleLogin() {
    console.log(this.username);
    console.log(this.password);
  }
}
