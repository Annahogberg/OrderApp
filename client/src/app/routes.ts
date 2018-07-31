import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { isLoggedInGuardService } from './guards/isloggedin.guard';
import { NegateUserLoggedInGuard } from './guards/negateuserloggedin.guard';


export const routes: Routes = [
  { path:'signup', component:SignupComponent, canActivate: [ NegateUserLoggedInGuard]},
  { path:'login', component:LoginComponent,  canActivate: [ NegateUserLoggedInGuard]},
  { path:'profile', component:UserProfileComponent,
  canActivate: [ isLoggedInGuardService]
  },
];