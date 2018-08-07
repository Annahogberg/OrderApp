import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ReservationService } from "../../../../services/reservation.service";
import { SessionService } from "../../../../services/session.service";
import { CarteService } from "../../../../services/carte.service";
import { OrderService } from "../../../../services/order.service";

@Component({
  selector: "app-one-reservation",
  templateUrl: "./one-reservation.component.html",
  styleUrls: ["./one-reservation.component.css"]
})
export class OneReservationComponent implements OnInit {
  reservation;
  user;

  dishes;

  isHidden: boolean = false;
  isOrder: boolean = false;

  toggleHidden() {
    this.isHidden = !this.isHidden;
  }

  toggleHiddenOrder() {
    this.isOrder = !this.isOrder;
  }

  constructor(
    public reservationService: ReservationService,
    public orderService: OrderService,
    public carteService: CarteService,
    public sessionService: SessionService,
    private aR: ActivatedRoute,
    private router: Router
  ) {
    this.aR.params.subscribe(params => {
      this.reservationService
        .getReservationDetails(params.id)
        .subscribe(reservation => {

let restaurantId = reservation.restaurant._id
          this.carteService
            .getDishesPublic(restaurantId)
            .subscribe(dishes => {
              console.log(dishes);
              this.dishes = dishes;
              return this.reservation = reservation;
            });
        });
    });
    this.sessionService.isLogged().subscribe(user => (this.user = user));
  }

  ngOnInit() {}

  // getDishes() {
  //   this.carteService.getDishesPublic(this.reservation.restaurant._id)
  //     .subscribe(dishes => (this.dishes = dishes));
  //     // this.isHidden = !this.isHidden;
  // }

  editReservation() {
    this.reservationService
      .editReservation(this.reservation)
      .subscribe(reservation => {
        this.reservation = reservation;
        this.router.navigate(["/profile"]);
      });
  }

  cancelReservation() {
    this.reservationService
      .cancelReservation(this.reservation)
      .subscribe(() => this.router.navigate(["/profile"]));
  }

  confirmReservation() {
    this.reservationService
      .confirmReservation(this.reservation)
      .subscribe(reservation => {
        this.reservation = reservation;
        this.router.navigate(["reservations/restaurant-reservations"]);
      });
  }

  declineReservation() {
    this.reservationService
      .declineReservation(this.reservation)
      .subscribe(reservation => {
        this.reservation = reservation;
        this.router.navigate(["reservations/restaurant-reservations"]);
      });
  }

  // order(dish, quantity){
  //     const order = {
  //       dish,
  //       quantity,
  //       user: this.user._id
  //     };
  
  //     this.orderService.order(order).subscribe((reser: any) => {
  //       this.router.navigate(["/profile"]);
  //     });
  //  }
  
  }

