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
import { UserEditComponent } from './user-edit/user-edit.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantService } from '../services/restaurant.service';
import { ReservationService } from '../services/reservation.service';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { OneReservationComponent } from './one-reservation/one-reservation.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ReservationEditComponent } from './reservation-edit/reservation-edit.component';
import { LandingComponent } from './landing/landing.component';
import { FileSelectDirective} from 'ng2-file-upload'
import {environment} from '../environments/environment'

import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserProfileComponent,
    UserEditComponent,
    RestaurantListComponent,
    RestaurantComponent,
    ReservationsListComponent,
    OneReservationComponent,
    FilterPipe,
    ReservationEditComponent,
    LandingComponent,
    FileSelectDirective

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMr7l3yXxN3hJdhgapxECHdHDNwhfGjrY'//environment.GOOGLEKEY
    })
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
