import { Injectable } from "../../node_modules/@angular/core";
import { Http } from "../../node_modules/@angular/http";
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators'


@Injectable()
export class ReservationService{

  constructor(private http: Http) {}

  getAllReservations() {
    return this.http
      .get(`${environment.BASEURL}/api/reservations`)
      .pipe(map(res => res.json()));
  }

  // getMyReservations() {
  //   return this.http
  //     .get(`${environment.BASEURL}/api/reservations/myreservations`)
  //     .pipe(map(res => {
  //       res.json()}));
  //     }

  
  

  getReservation(id) {
    return this.http
      .get(`${environment.BASEURL}/api/reservations/reservation/${id}`)
      .pipe(map(res => res.json()));
  }

  editReservation(reservation) {
    return this.http
      .put(`${environment.BASEURL}/api/reservations/reservation/edit/${reservation._id}`, reservation)
      .pipe(map(res => res.json()));
  }

  remove(id) {
    return this.http
      .delete(`${environment.BASEURL}/api/reservations/reservation/delete/${id}`)
      .pipe(map(res => res.json()));
  } 

}