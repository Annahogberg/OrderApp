import { Injectable } from "../../node_modules/@angular/core";
import { Http } from "../../node_modules/@angular/http";
import { environment } from "../environments/environment";
import { map } from "rxjs/operators";

@Injectable()
export class OrderService {


  constructor(private http: Http) {}

  addOrder(reservationId, orderId, quantity){
    console.log(orderId)
    console.log(quantity)
      return this.http.post(`${environment.BASEURL}/api/reservations/reservation/${reservationId}/order/${orderId}/newOrder`, {quantity}).pipe(
        map(reservation => reservation.json()))
    }

  // getUserOrders(id) {
  //   return this.http
  //     .get(`${environment.BASEURL}/api/order/userOrders/${id}`)
  //     .pipe(map(res => res.json()));
  // }

  // getRestaurantOrders(id) {
  //   return this.http
  //     .get(`${environment.BASEURL}/api/order/allOrders/${id}`)
  //     .pipe(map(res => res.json()));
  // }

  // getOrderDetails(id) {
  //   return this.http
  //     .get(`${environment.BASEURL}/api/order/orderDetails/${id}`)
  //     .pipe(map(res => res.json()));
  // }

  // order(order){
  //   return this.http
  //   .post(`${environment.BASEURL}/api/order/newOrder`, order)
  //   .pipe(map(res => res.json()));
  // }

  // editOrder(order) {
  //   return this.http.post(`${environment.BASEURL}/api/order/edit/${order._id}`,order)
  //     .pipe(map(res => res.json()));
  // }

  // cancelOrder(order) {
  //   return this.http.delete(`${environment.BASEURL}/api/order/delete/${order._id}`,order)
  //     .pipe(map(res => res.json()));
  // }

}