import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { FundooheaderComponent } from './component/fundooheader/fundooheader.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
    FundooheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
