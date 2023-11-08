import { Injectable } from '@angular/core';

// Makes this a service
@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  // create a authenticate() method
  authenticate(username: string, password: string) {
    if (username === 'tiger' && password === 'dummy') {
      return true;
    }
    return false;
  }
}
