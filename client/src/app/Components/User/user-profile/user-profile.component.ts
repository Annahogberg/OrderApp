import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../../../services/session.service";
import { ReservationService } from "../../../../services/reservation.service";
import { RestaurantService } from "../../../../services/restaurant.service";
import { ActivatedRoute, Router } from "../../../../../node_modules/@angular/router";


@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  user;
  isHidden: boolean = false;
  restaurantList;
  // lat: number = 40.4222785;
  // lng: number = -3.7072047;

  toggleHidden(e){
    this.isHidden = !this.isHidden
  }

  constructor(
    public sessionService: SessionService,
    public reservationService: ReservationService,
    public restaurantService: RestaurantService,
    private aR: ActivatedRoute,
    private router: Router
  ) {
    this.sessionService.isLogged().subscribe(user => (this.user = user));
  }

  ngOnInit() {
    this.restaurantService.getRestaurantList().subscribe(restaurants => this.restaurantList = restaurants)
  }
}