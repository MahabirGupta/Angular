import { Component, OnInit } from '@angular/core';
// import org.springframework.boot.SpringApplication;
import { AppComponent } from '../app.component';

//@ComponentScan(value='users')
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})

// public class SpringBootFirstWebApplication implements{}
export class WelcomeComponent implements OnInit {
  // In Java
  // String message = 'Some Welcome message';
  message = 'Some Welcome message';

  //public SpringBootFirstWebApplication(){}
  constructor() {}

  // void init(){}
  ngOnInit(): void {
    // COMPILATION ERROR this.message = 5;
    console.log(this.message);
  }
}

export class Books {}

export class Students {}
