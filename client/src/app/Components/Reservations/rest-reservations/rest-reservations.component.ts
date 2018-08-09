import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../../../services/reservation.service';
import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-rest-reservations',
  templateUrl: './rest-reservations.component.html',
  styleUrls: ['./rest-reservations.component.css']
})
export class RestReservationsComponent implements OnInit {

  reservationList;
  cancelledReservation;
  pendingReservation;
  confirmedReservation;
  declinedReservation;

  searchDate;
  searchStatus;


  constructor(public reservationService: ReservationService, public sessionService: SessionService) { 
      
    this.sessionService.isLogged().subscribe(user => {
      this.reservationService
        .getRestaurantReservation(user._id)
        .subscribe(reservations => {
          this.pendingReservation = reservations.filter( e => e.confirmation == 'Pending');
          this.cancelledReservation = reservations.filter( e => e.confirmation == 'Cancelled');
          this.confirmedReservation = reservations.filter( e => e.confirmation == 'Confirmed');
          this.declinedReservation = reservations.filter( e => e.confirmation == 'Declined');

          this.reservationList = reservations;
        });
    });
  }

  ngOnInit() {
  }
}
