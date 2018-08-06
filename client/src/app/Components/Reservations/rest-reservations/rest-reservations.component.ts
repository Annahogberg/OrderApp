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
  constructor(public reservationService: ReservationService, public sessionService: SessionService) { 
      
    this.sessionService.isLogged().subscribe(user => {
      this.reservationService
        .getRestaurantReservation(user._id)
        .subscribe(reservations => {
          this.reservationList = reservations;
        });
    });
  }

  ngOnInit() {
  }
}
