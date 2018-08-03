import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.css']
})
export class ReservationEditComponent implements OnInit {

  reservation;
  constructor(public reservationService: ReservationService, public userService: UserService, private aR: ActivatedRoute, private router: Router) { 
    this.aR.params.subscribe(params => this.reservationService.getReservation(params.id).subscribe(reservation => {
      this.reservation = reservation;
    }))
  }

  ngOnInit() {
  }

  editReservation(reservation) {
    this.reservationService.editReservation(this.reservation).subscribe(reservation => {
      this.reservation = reservation;
      this.router.navigate(["/reservations/myreservations"]);
    })
  };

}
