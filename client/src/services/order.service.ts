import { Injectable } from "../../node_modules/@angular/core";
import { Http } from "../../node_modules/@angular/http";
import { environment } from "../environments/environment";
import { map } from "rxjs/operators";

@Injectable()
export class OrderService {


  constructor(private http: Http) {}

  addOrder(reservationId, orderId, quantity){
      return this.http.post(`${environment.BASEURL}/api/reservations/reservation/${reservationId}/order/${orderId}/newOrder`, {quantity}).pipe(
        map(reservation => reservation.json()))
    }

}