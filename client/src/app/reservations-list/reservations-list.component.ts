import { Component, OnInit } from "@angular/core";
import { ReservationService } from "../../services/reservation.service";
import { ActivatedRoute, Router } from "../../../node_modules/@angular/router";
import { SessionService } from "../../services/session.service";
import { RestaurantService } from "../../services/restaurant.service";

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
    //this.reservationService.getAllReservations().subscribe(reservations => {console.log(reservations);this.reservationList = reservations})
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
