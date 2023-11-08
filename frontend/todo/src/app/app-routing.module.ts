import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

// Create a route for welcome component
const routes: Routes = [
  // the default path goes to the login page
  { path: '', component: LoginComponent }, //implement a RouteGuard service
  { path: 'login', component: LoginComponent }, //Can add conditions. canActivate only on a specific condition
  {
    path: 'welcome/:name',
    component: WelcomeComponent,
    canActivate: [RouteGuardService],
  }, //activated only when the RouteGuardService returns true
  {
    path: 'todos',
    component: ListTodosComponent,
    canActivate: [RouteGuardService],
  }, //activated only when the RouteGuardService returns true
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [RouteGuardService],
  }, //activated only when the RouteGuardService returns true

  // Any other url route it to error page
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
