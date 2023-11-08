import { Component, OnInit } from '@angular/core';
// import org.springframework.boot.SpringApplication;
import { AppComponent } from '../app.component';
import { ActivatedRoute, Route, Router } from '@angular/router';

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
  // path = '';

  //public SpringBootFirstWebApplication(){}
  // Inject dependency ActivatedRoute
  constructor(private route: ActivatedRoute, private router: Router) {}

  // void init(){}
  ngOnInit(): void {
    // COMPILATION ERROR this.message = 5;
    console.log(this.message);
    this.name = this.route.snapshot.params['name']; //want to pick up the name parameter
    // console.log(this.route.snapshot.params['name']);
  }

  // handleLogout() {
  //   this.router.navigate(['login']); //just passing in the welcome route and the username as the parameter
  // }
}
export class Books {}

export class Students {}
