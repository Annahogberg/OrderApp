import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class CarteService{
  constructor(private http: Http) {}

  getDishes(id) {
    return this.http.get(`${environment.BASEURL}/api/carte/${id}`)
      .pipe(map((res) => res.json()));
  }


  getDetails(id) {
    return this.http.get(`${environment.BASEURL}/api/carte/details/${id}`)
      .pipe(map((res) => res.json()));
  }

  createDish(dish) {
    return this.http.post(`${environment.BASEURL}/api/carte/newDish`, dish)
      .pipe(map((res) => res.json()));
  }

  editDish(dish){
    return this.http.post(`${environment.BASEURL}/api/carte/edit/${dish._id}`, dish)
    .pipe(map(res => res.json()));
}

deleteDish(dish) {
  return this.http.delete(`${environment.BASEURL}/api/carte/delete/${dish._id}`,dish)
    .pipe(map(res => res.json()));
}

}