import { Injectable } from "../../node_modules/@angular/core";
import { Http } from "../../node_modules/@angular/http";
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators'


@Injectable()
export class UserService{

  constructor(private http: Http) {}

  getUserDetails() {
    return this.http
      .get(`${environment.BASEURL}/api/profile`)
      .pipe(map(res => res.json()));
  }

  get(id) {
    return this.http
      .get(`${environment.BASEURL}/api/profile/${id}`)
      .pipe(map(res => res.json()));
  }

  edit(user) {
    return this.http
      .put(`${environment.BASEURL}/api/profile/edit/${user._id}`, user)
      .pipe(map(res => res.json()));
  }


}