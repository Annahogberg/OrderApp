import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../../../services/session.service";
import { ReservationService } from "../../../../services/reservation.service";
import { RestaurantService } from "../../../../services/restaurant.service";
import { ActivatedRoute, Router } from "../../../../../node_modules/@angular/router";
import { UserService } from "../../../../services/user.service";


@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  user;
  isHidden: boolean = false;
  reservationList;

  toggleHidden(){
    this.isHidden = !this.isHidden
  }

  searchStatus = "Confirmed";
  confirmedReservations;

  constructor(
    public sessionService: SessionService,
    public reservationService: ReservationService,
    public restaurantService: RestaurantService,
    public userService: UserService,
  ) {
    this.sessionService.isLogged().subscribe(user => {this.user = user;
      this.reservationService.getUserReservation(this.user._id).subscribe(reservations => {
        this.confirmedReservations = reservations.filter( e => e.confirmation == 'Confirmed');
        return this.reservationList = reservations;
  });
    });
  }
  
  ngOnInit() {
  
   
  }

  edit() {
    this.userService.edit(this.user).subscribe(user => {
      this.user = user;
      this.toggleHidden();
    });
  }

}