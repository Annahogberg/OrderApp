import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpModule } from '../../node_modules/@angular/http';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './routes';
import { FormsModule } from '@angular/forms';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import { isLoggedInGuardService } from './guards/isloggedin.guard';
import { NegateUserLoggedInGuard } from './guards/negateuserloggedin.guard';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,

    UserProfileComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [SessionService, UserService, isLoggedInGuardService, NegateUserLoggedInGuard], //isLoggedInGuardService
  bootstrap: [AppComponent]
})
export class AppModule { }
