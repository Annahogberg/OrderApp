import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule } from '../../node_modules/@angular/http';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './routes';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import { isLoggedInGuardService } from './guards/isloggedin.guard';
import { NegateUserLoggedInGuard } from './guards/negateuserloggedin.guard';
import { RestaurantService } from '../services/restaurant.service';
import { ReservationService } from '../services/reservation.service';

import { FilterPipe } from './pipes/filter.pipe';


import { FileSelectDirective} from 'ng2-file-upload'
import {environment} from '../environments/environment'

import { AgmCoreModule } from '@agm/core';
import { NguiMapModule} from '@ngui/map';

      //AUTH&LANDING
import { LoginComponent } from './Components/AuthLanding/login/login.component';
import { SignupComponent } from './Components/AuthLanding/signup/signup.component';
import { LandingComponent } from './Components/AuthLanding/landing/landing.component';

      //USER
import { UserProfileComponent } from './Components/User/user-profile/user-profile.component';
import { UserEditComponent } from './Components/User/user-edit/user-edit.component';

      //RESTAURANT
import { RestaurantListComponent } from './Components/Restaurants/restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './Components/Restaurants/restaurant/restaurant.component';

      //RESERVATIONS
import { ReservationsListComponent } from './Components/Reservations/reservations-list/reservations-list.component';
import { OneReservationComponent } from './Components/Reservations/one-reservation/one-reservation.component';
import { ReservationEditComponent } from './Components/Reservations/reservation-edit/reservation-edit.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    UserProfileComponent,
    UserEditComponent,
    RestaurantListComponent,
    RestaurantComponent,
    ReservationsListComponent,
    OneReservationComponent,
    ReservationEditComponent,
    FilterPipe,
    FileSelectDirective

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAMr7l3yXxN3hJdhgapxECHdHDNwhfGjrY',
    //   libraries: ["places"]//environment.GOOGLEKEY
    // }),

    NguiMapModule.forRoot({apiUrl: `https://maps.google.com/maps/api/js?key=${environment.GOOGLEKEY}`})
  ],
  providers: [
    SessionService, 
    UserService, 
    isLoggedInGuardService, 
    NegateUserLoggedInGuard, 
    RestaurantService,
    ReservationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
