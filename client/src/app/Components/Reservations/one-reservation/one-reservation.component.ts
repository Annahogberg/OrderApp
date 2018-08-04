import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationService } from '../../../../services/reservation.service';
import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-one-reservation',
  templateUrl: './one-reservation.component.html',
  styleUrls: ['./one-reservation.component.css']
})
export class OneReservationComponent implements OnInit {

  reservation;
  user;
  // isHidden: boolean = false;

  // toggleHidden(e){
  //   this.isHidden = !this.isHidden
  // }

  constructor(public reservationService: ReservationService, public sessionService: SessionService, private aR: ActivatedRoute, private router: Router) {
    this.aR.params.subscribe(params => {
      this.reservationService.getReservationDetails(params.id).subscribe(reservation => {
        this.reservation = reservation;
      })
    });
    this.sessionService.isLogged().subscribe(user=> this.user = user)
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
