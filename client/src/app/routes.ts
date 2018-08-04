import { Routes } from '@angular/router';

import { isLoggedInGuardService } from './guards/isloggedin.guard';
import { NegateUserLoggedInGuard } from './guards/negateuserloggedin.guard';

//COMPONENTS


      //AUTH&LANDING
import { LandingComponent } from './Components/AuthLanding/landing/landing.component';
import { SignupComponent } from './Components/AuthLanding/signup/signup.component';
import { LoginComponent } from './Components/AuthLanding/login/login.component';

      //USER
import { UserProfileComponent } from './Components/User/user-profile/user-profile.component';
import { UserEditComponent } from './Components/User/user-edit/user-edit.component';

      //RESTAURANT
import { RestaurantListComponent } from './Components/Restaurants/restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './Components/Restaurants/restaurant/restaurant.component';

      //RESERVATIONS
import { ReservationsListComponent } from './Components/Reservations/reservations-list/reservations-list.component';
import { ReservationEditComponent } from './Components/Reservations/reservation-edit/reservation-edit.component';
import { OneReservationComponent } from './Components/Reservations/one-reservation/one-reservation.component';




export const routes: Routes = [
  { path:'', component:LandingComponent, canActivate: [ NegateUserLoggedInGuard]},
  { path:'signup', component:SignupComponent, canActivate: [ NegateUserLoggedInGuard]},
  { path:'login', component:LoginComponent,  canActivate: [ NegateUserLoggedInGuard]},
  { path:'profile', component:UserProfileComponent,
  canActivate: [ isLoggedInGuardService]},
  { path:'profile/edit/:id', component:UserEditComponent, canActivate: [ isLoggedInGuardService]},
  // { path:'menu/:id', component:UserEditComponent, canActivate: [ isLoggedInGuardService]},
  {path: 'restaurants', component: RestaurantListComponent, canActivate: [isLoggedInGuardService]},
  {path: 'restaurants/restaurant/:id', component: RestaurantComponent, canActivate: [isLoggedInGuardService]},
  {path: 'reservations/myreservations', component: ReservationsListComponent, canActivate: [isLoggedInGuardService]},
  {path: 'reservations/reservation/:id', component: OneReservationComponent, canActivate: [isLoggedInGuardService]},
  {path: 'reservations/reservation/edit/:id', component: ReservationEditComponent, canActivate: [isLoggedInGuardService]},
  { path: '**', redirectTo: '' }


];