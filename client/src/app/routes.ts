import { Routes } from '@angular/router';

import { isLoggedInGuardService } from './Guards/isloggedin.guard';
import { NegateUserLoggedInGuard } from './Guards/negateuserloggedin.guard';

//COMPONENTS


      //AUTH&LANDING
import { LandingComponent } from './Components/AuthLanding/landing/landing.component';
import { SignupComponent } from './Components/AuthLanding/signup/signup.component';
import { LoginComponent } from './Components/AuthLanding/login/login.component';

      //USER
import { UserProfileComponent } from './Components/User/user-profile/user-profile.component';

      //RESTAURANT
import { RestaurantListComponent } from './Components/Restaurants/restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './Components/Restaurants/restaurant/restaurant.component';

      //RESERVATIONS
import { ReservationsListComponent } from './Components/Reservations/reservations-list/reservations-list.component';
import { OneReservationComponent } from './Components/Reservations/one-reservation/one-reservation.component';
import { RestReservationsComponent } from './Components/Reservations/rest-reservations/rest-reservations.component';

import { CarteViewComponent } from './Components/Carte/carte-view/carte-view.component';
import { CarteNewComponent } from './Components/Carte/carte-new/carte-new.component';
import { CarteEditComponent } from './Components/Carte/carte-edit/carte-edit.component';


export const routes: Routes = [
  { path:'', component:LandingComponent, canActivate: [ NegateUserLoggedInGuard] },
  { path:'signup', component:SignupComponent, canActivate: [ NegateUserLoggedInGuard] },
  { path:'login', component:LoginComponent,  canActivate: [ NegateUserLoggedInGuard] },
  { path:'profile', component:UserProfileComponent, canActivate: [ isLoggedInGuardService] },
  {path: 'carte', component: CarteViewComponent, canActivate: [ isLoggedInGuardService] },
  {path: 'carte/new', component: CarteNewComponent, canActivate: [ isLoggedInGuardService] },
  {path: 'carte/edit/:id', component: CarteEditComponent, canActivate: [ isLoggedInGuardService] },
  { path: 'restaurants', component: RestaurantListComponent, canActivate: [isLoggedInGuardService] },
  { path: 'restaurants/restaurant/:id', component: RestaurantComponent, canActivate: [isLoggedInGuardService] },
  { path: 'reservations/reservations', component: ReservationsListComponent, canActivate: [isLoggedInGuardService] },
  { path: 'reservations/restaurant-reservations', component: RestReservationsComponent, canActivate: [isLoggedInGuardService] },
  { path: 'reservations/reservation/:id', component: OneReservationComponent, canActivate: [isLoggedInGuardService] },
  
  { path: '**', redirectTo: '' }


];