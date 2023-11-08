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
      sessionStorage.setItem('authenticaterUser', username);
      // console.log('after ' + this.isUserLoggedIn());

      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }
}
