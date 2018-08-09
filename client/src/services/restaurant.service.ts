import { Injectable } from "../../node_modules/@angular/core";
import { Http } from "../../node_modules/@angular/http";
import { environment } from '../environments/environment';
import {map, catchError} from 'rxjs/operators';
import { of } from 'rxjs';

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

  errorHandler(e){
    console.log('SessionServiceError')
    console.log(e.message);
    console.log(e);
    return e;
  }


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
    .pipe(map(res => res.json()),
    catchError( e => of(this.errorHandler(e))));
    }
};
