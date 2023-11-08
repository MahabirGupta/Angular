import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';

// Create a route for welcome component
const routes: Routes = [
  // the default path goes to the login page
  { path: '', component: LoginComponent }, //implement a RouteGuard service
  { path: 'login', component: LoginComponent }, //Can add conditions. canActivate only on a specific condition
  { path: 'welcome/:name', component: WelcomeComponent }, //route can accept a parameter
  { path: 'todos', component: ListTodosComponent }, //route can accept a parameter
  { path: 'logout', component: LogoutComponent }, //route can accept a parameter

  // Any other url route it to error page
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
