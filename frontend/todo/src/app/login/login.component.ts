import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  // Use the instance of the router
  // Dependency injection

  constructor(private router: Router) {
    //Don't want the router to be used outside this specific class
    //Find the router and inject it into the LoginComponent using Dependency injection and it is built-in into Angular
  }

  ngOnInit(): void {}

  handleLogin() {
    // console.log(this.username);
    // Not safe to display password
    // console.log(this.password);
    if (this.username === 'tiger' && this.password === '') {
      // console.log('Login successful');

      // Redirect to welcome page
      this.router.navigate(['welcome']); //just passing in the welcome route

      this.successfulLogin = true;
      this.invalidLogin = false;
    } else {
      // console.log(this.errorMessage);
      this.successfulLogin = false;
      this.invalidLogin = true;
    }
  }
}
