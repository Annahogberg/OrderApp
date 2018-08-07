import { Injectable } from "../../node_modules/@angular/core";
import { Http } from "../../node_modules/@angular/http";
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

interface reservationObject{
  date: string,
  time: string,
  pax: number,
  comment: string,
}

@Injectable()
export class RestaurantService {

  reservation: reservationObject;
  options: any = { withCredentials: true };


  constructor(private http: Http) {}

  getRestaurantList() {
    return this.http
      .get(`${environment.BASEURL}/api/restaurants`)
      .pipe(map(res => res.json()));
  }

  getRestaurant(id) {
    return this.http
      .get(`${environment.BASEURL}/api/restaurants/restaurant/${id}` )
      .pipe(map(res => res.json()
    ));
  }

  reserve(reservation){
    return this.http
    .post(`${environment.BASEURL}/api/restaurants/restaurant/reservation`,reservation, this.options)
    .pipe(map(res => res.json()));
  }

};
