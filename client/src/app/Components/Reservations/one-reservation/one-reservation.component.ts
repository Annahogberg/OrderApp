import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ReservationService } from "../../../../services/reservation.service";
import { SessionService } from "../../../../services/session.service";
import { CarteService } from "../../../../services/carte.service";
import { OrderService } from "../../../../services/order.service";
import { Observable} from "rxjs";

@Component({
  selector: "app-one-reservation",
  templateUrl: "./one-reservation.component.html",
  styleUrls: ["./one-reservation.component.css"]
})
export class OneReservationComponent implements OnInit {
  reservation;
  user;

  dishes;
  appetizers;
  maincourses;
  dessert;
  softDrink;
  alcohol;
  other;

  dishId: String;
  quantity: Number;

  total;

  id: string;
  orders: any;

  age;

  isHidden: boolean = false;
  isOrder: boolean = false;

  isWhenConfirmed: boolean = false

  toggleHidden() {
    this.isHidden = !this.isHidden;
  }


  message;


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

          this.reservation = reservation; 
let restaurantId = reservation.restaurant._id
          this.carteService
            .getDishesPublic(restaurantId)
            .subscribe(dishes => {
     
              this.appetizers = dishes.filter( e => e.type == 'Appetizer');
              this.maincourses = dishes.filter( e => e.type == 'Main Course');
              this.dessert = dishes.filter( e => e.type == 'Dessert');
              this.softDrink = dishes.filter( e => e.type == 'Soft Drink');
              this.alcohol = dishes.filter(e => e.type == "Alcohol")
              this.other = dishes.filter( e => e.type == 'Other');
       
              return this.reservation = reservation;
            });
        });
    });
    this.sessionService.isLogged().subscribe(user => {this.age = user.age; return this.user = user});
  }

  ngOnInit() {}
  
  editReservation() {
    this.reservationService
      .editReservation(this.reservation)
      .subscribe(reservation => {
  if(reservation['status']>=500) {
    this.message = reservation._body
  } 
  else {
    this.reservation = reservation;
     this.isHidden = !this.isHidden;
  }; 
});
}

  cancelReservation() {
    this.reservationService
      .cancelReservation(this.reservation)
      .subscribe(() => this.router.navigate(["reservations/reservations"]));
  }

  cancelResReservation() {
    this.reservationService
      .cancelReservation(this.reservation)
      .subscribe(() => this.router.navigate(["reservations/restaurant-reservations"]));
  }

  confirmReservation() {
    this.reservationService
      .confirmReservation(this.reservation)
      .subscribe(reservation => {
        this.reservation = reservation;
        this.isWhenConfirmed = !this.isWhenConfirmed;
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

  deleteReservation(){
    this.reservationService.deleteReservation(this.reservation).subscribe(reservation => {
      this.router.navigate(["reservations/reservations"]);
    })  }
  

    addOrderToReservation(reservationId, id, quantity) {
      console.log(reservationId, id, quantity.value);
      this.orderService.addOrder(reservationId, id, quantity.value)
        .subscribe(order => {
          this.orders = order;
          console.log(order.order);
        });
    }
  }

