import { Component, OnInit } from "@angular/core";
import { Observable } from "../../../node_modules/rxjs";
import { ActivatedRoute, Router } from "../../../node_modules/@angular/router";
import { SessionService } from "../../services/session.service";
import { ReservationService } from "../../services/reservation.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  user;
  reservation;

  constructor(
    public sessionService: SessionService,
    public reservationService: ReservationService,
    private aR: ActivatedRoute,
    private router: Router
  ) {
    this.sessionService.isLogged().subscribe(user => (this.user = user));
  }
  
  ngOnInit() {

    this.reservationService.getAllReservations().subscribe(reservation => (this.reservation = reservation));
  }
}
