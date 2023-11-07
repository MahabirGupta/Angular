import { Component, OnInit } from '@angular/core';
// import org.springframework.boot.SpringApplication;
import { AppComponent } from '../app.component';
import { ActivatedRoute, Route } from '@angular/router';

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
  name = '';

  //public SpringBootFirstWebApplication(){}
  // Inject dependency ActivatedRoute
  constructor(private route: ActivatedRoute) {}

  // void init(){}
  ngOnInit(): void {
    // COMPILATION ERROR this.message = 5;
    console.log(this.message);
    this.name = this.route.snapshot.params['name']; //want to pick up the name parameter
    // console.log(this.route.snapshot.params['name']);
  }
}

export class Books {}

export class Students {}
