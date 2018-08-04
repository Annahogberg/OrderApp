import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class ReviewService{
  constructor(private http: Http) {}

  getReviews(id) {
    return this.http.get(`${environment.BASEURL}/api/reviews/byrestaurant/${id}`)
      .pipe(map((res) => res.json()));
  }

  saveReview(review) {
    return this.http.post(`${environment.BASEURL}/api/reviews/newReview`, review)
      .pipe(map((res) => res.json()));
  }

}