import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { ReservationService } from "../../../../services/reservation.service";
import { SessionService } from "../../../../services/session.service";
import { RestaurantService } from "../../../../services/restaurant.service";


@Component({
  selector: "app-reservations-list",
  templateUrl: "./reservations-list.component.html",
  styleUrls: ["./reservations-list.component.css"]
})
export class ReservationsListComponent implements OnInit {
  reservationList;

  constructor(
    public reservationService: ReservationService,
    public sessionService: SessionService,
    public restaurantService: RestaurantService,
    private aR: ActivatedRoute,
    private router: Router
  ) {
  
    this.sessionService.isLogged().subscribe(user => {
      this.reservationService
        .getReservation(user._id)
        .subscribe(reservations => {
          this.reservationList = reservations;
        });
    });
  }

  ngOnInit() {}
}
