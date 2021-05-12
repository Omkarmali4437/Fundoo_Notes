import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DisplayComponent } from './component/display/display.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';

const routes: Routes = [
  {
    path : "",
    redirectTo: "login",
    pathMatch: "full"
  },
  { 
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'resetpassword/:token',
    component: ResetpasswordComponent
  },
  {
    path: 'forgot',
    component: ForgotpasswordComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'display',
    component: DisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
