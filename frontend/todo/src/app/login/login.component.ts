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
  errorMessage = 'Invalid Credentials';
  successMessage = 'Login successfully';
  successfulLogin = false;
  invalidLogin = false;
  constructor() {}

  ngOnInit(): void {}

  handleLogin() {
    // console.log(this.username);
    // Not safe to display password
    // console.log(this.password);
    if (this.username === 'tiger' && this.password === '') {
      // console.log('Login successful');
      this.successfulLogin = true;
      this.invalidLogin = false;
    } else {
      // console.log(this.errorMessage);
      this.successfulLogin = false;
      this.invalidLogin = true;
    }
  }
}
