import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: 'reset',
    component: ResetpasswordComponent
  },
  {
    path: 'forgot',
    component: ForgotpasswordComponent
  },
  {
    path: "**",
    redirectTo: "reset",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
