import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule } from '../../node_modules/@angular/http';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './routes';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import { isLoggedInGuardService } from './Guards/isloggedin.guard';
import { NegateUserLoggedInGuard } from './Guards/negateuserloggedin.guard';
import { RestaurantService } from '../services/restaurant.service';
import { ReservationService } from '../services/reservation.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatMenuModule, MatIconModule } from '@angular/material';

import { FilterPipe } from './Pipes/filter.pipe';


import { FileUploadModule} from 'ng2-file-upload'
import {environment} from '../environments/environment'

import { AgmCoreModule } from '@agm/core';

      //AUTH&LANDING
import { LoginComponent } from './Components/AuthLanding/login/login.component';
import { SignupComponent } from './Components/AuthLanding/signup/signup.component';
import { LandingComponent } from './Components/AuthLanding/landing/landing.component';

      //USER
import { UserProfileComponent } from './Components/User/user-profile/user-profile.component';

      //RESTAURANT
import { RestaurantListComponent } from './Components/Restaurants/restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './Components/Restaurants/restaurant/restaurant.component';

      //RESERVATIONS
import { ReservationsListComponent } from './Components/Reservations/reservations-list/reservations-list.component';
import { OneReservationComponent } from './Components/Reservations/one-reservation/one-reservation.component';
import { RestReservationsComponent } from './Components/Reservations/rest-reservations/rest-reservations.component';

      //REVIEWS
import { ReviewService } from '../services/review.service';

//CARTE
import { CarteEditComponent } from './Components/Carte/carte-edit/carte-edit.component';
import { CarteNewComponent } from './Components/Carte/carte-new/carte-new.component';
import { CarteService } from '../services/carte.service';

import { OrderService } from '../services/order.service';
import { PaymentComponent } from './Components/Reservations/payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    UserProfileComponent,
    RestaurantListComponent,
    RestaurantComponent,
    ReservationsListComponent,
    OneReservationComponent,
    FilterPipe,
    RestReservationsComponent,
    CarteEditComponent,
    CarteNewComponent,
    PaymentComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FileUploadModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLEKEY,
      libraries: ["places"]
    }),
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [
    SessionService, 
    UserService, 
    isLoggedInGuardService, 
    NegateUserLoggedInGuard, 
    RestaurantService,
    ReservationService,
    ReviewService,
    CarteService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
