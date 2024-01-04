import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Define a new class
export class HelloWorldBean {
  constructor(public message: string, public errorMessage: string) {}
}
@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  // Create a method that can be use to invoke the Hello World Service
  executeHelloWorldBeanService() {
    // defining the response structure I am expecting back
    return this.http.get<HelloWorldBean>(
      'http://localhost:8080/hello-world-bean'
    );
  }

  // Create a method which will retrieve the data from the backend service
  constructor(private http: HttpClient) {}
}
