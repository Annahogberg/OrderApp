import { Injectable } from "../../node_modules/@angular/core";
import { Http } from "../../node_modules/@angular/http";
import { environment } from "../environments/environment";
import {map, catchError} from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class ReservationService {
  constructor(private http: Http) {}

  errorHandler(e){
    console.log('SessionServiceError')
    console.log(e.message);
    console.log(e);
    return e;
  }

  getUserReservation(id) {
    return this.http
      .get(`${environment.BASEURL}/api/reservations/userReservations/${id}`)
      .pipe(map(res => res.json()));
  }

  getRestaurantReservation(id) {
    return this.http
      .get(`${environment.BASEURL}/api/reservations/restReservations/${id}`)
      .pipe(map(res => res.json()));
  }

  getReservationDetails(id) {
    return this.http
      .get(`${environment.BASEURL}/api/reservations/reservationsdetails/${id}`)
      .pipe(map(res => res.json()));
  }

  editReservation(reservation) {
    return this.http.put(`${environment.BASEURL}/api/reservations/reservation/edit/${reservation._id}`,reservation)
      .pipe(map(res => res.json()),
  catchError( e => of(this.errorHandler(e))));
  }

  cancelReservation(reservation) {
    return this.http.post(`${environment.BASEURL}/api/reservations/reservation/cancel/${reservation._id}`,reservation)
      .pipe(map(res => res.json()));
  }

  confirmReservation(reservation) {
    return this.http.post(`${environment.BASEURL}/api/reservations/reservation/confirm/${reservation._id}`,reservation)
      .pipe(map(res => res.json()));
  }

  declineReservation(reservation) {
    return this.http.post(`${environment.BASEURL}/api/reservations/reservation/decline/${reservation._id}`,reservation)
      .pipe(map(res => res.json()));
  }

  deleteReservation(reservation) {
    return this.http
      .delete(`${environment.BASEURL}/api/reservations/reservation/delete/${reservation._id}`)
       .pipe(map(res => res.json()));
   } 
}
