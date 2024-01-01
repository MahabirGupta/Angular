import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  // Create a method that can be use to invoke the Hello World Service
  executeHelloWorldBeanService() {
    return this.http.get('http://localhost:8080/hello-world-bean');
  }

  // Create a method which will retrieve the data from the backend service
  constructor(private http: HttpClient) {}
}
