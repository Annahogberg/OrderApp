import { Injectable } from "../../node_modules/@angular/core";
import { Http } from "../../node_modules/@angular/http";
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators'

@Injectable()
export class RestaurantService {
  restaurant;
  // options: any = { withCredentials: true };


  constructor(private http: Http) {}

  getRestaurantList() {
    return this.http
      .get(`${environment.BASEURL}/api/restaurants`)
      .pipe(map(res => res.json()));
  }

  getRestaurant(id) {
    return this.http
      .get(`${environment.BASEURL}/api/restaurants/${id}` )
      .pipe(map(res => res.json()));
  }
};
