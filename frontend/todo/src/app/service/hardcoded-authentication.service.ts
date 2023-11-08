import { Injectable } from '@angular/core';

// Makes this a service
@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  // create a authenticate() method
  authenticate(username: string, password: string) {
    // console.log('before ' + this.isUserLoggedIn());
    if (username === 'tiger' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('after ' + this.isUserLoggedIn());

      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }
}
