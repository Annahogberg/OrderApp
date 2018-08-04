import { Routes } from '@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { isLoggedInGuardService } from './guards/isloggedin.guard';
import { NegateUserLoggedInGuard } from './guards/negateuserloggedin.guard';
import { UserEditComponent } from './user-edit/user-edit.component';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { OneReservationComponent } from './one-reservation/one-reservation.component';
import { ReservationEditComponent } from './reservation-edit/reservation-edit.component';
import { LandingComponent } from './Components/AuthLanding/landing/landing.component';
import { SignupComponent } from './Components/AuthLanding/signup/signup.component';
import { LoginComponent } from './Components/AuthLanding/login/login.component';




export const routes: Routes = [
  { path:'', component:LandingComponent, canActivate: [ NegateUserLoggedInGuard]},
  { path:'signup', component:SignupComponent, canActivate: [ NegateUserLoggedInGuard]},
  { path:'login', component:LoginComponent,  canActivate: [ NegateUserLoggedInGuard]},
  { path:'profile', component:UserProfileComponent,
  canActivate: [ isLoggedInGuardService]},
  { path:'profile/edit/:id', component:UserEditComponent, canActivate: [ isLoggedInGuardService]},
  { path:'menu/:id', component:UserEditComponent, canActivate: [ isLoggedInGuardService]},
  {path: 'restaurants', component: RestaurantListComponent, canActivate: [isLoggedInGuardService]},
  {path: 'restaurants/restaurant/:id', component: RestaurantComponent, canActivate: [isLoggedInGuardService]},
  {path: 'reservations/myreservations', component: ReservationsListComponent, canActivate: [isLoggedInGuardService]},
  {path: 'reservations/reservation/:id', component: OneReservationComponent, canActivate: [isLoggedInGuardService]},
  {path: 'reservations/reservation/edit/:id', component: ReservationEditComponent, canActivate: [isLoggedInGuardService]},
  { path: '**', redirectTo: '' }


];