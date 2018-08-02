import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { isLoggedInGuardService } from './guards/isloggedin.guard';
import { NegateUserLoggedInGuard } from './guards/negateuserloggedin.guard';
import { UserEditComponent } from './user-edit/user-edit.component';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';


export const routes: Routes = [
  { path:'signup', component:SignupComponent, canActivate: [ NegateUserLoggedInGuard]},
  { path:'login', component:LoginComponent,  canActivate: [ NegateUserLoggedInGuard]},
  { path:'profile', component:UserProfileComponent,
  canActivate: [ isLoggedInGuardService]},
  { path:'edit/:id', component:UserEditComponent, canActivate: [ isLoggedInGuardService]},
  { path:'menu/:id', component:UserEditComponent, canActivate: [ isLoggedInGuardService]},
  {path: 'restaurants', component: RestaurantListComponent, canActivate: [isLoggedInGuardService]},
  {path: 'restaurants/restaurant/:id', component: RestaurantComponent, canActivate: [isLoggedInGuardService]}
];

