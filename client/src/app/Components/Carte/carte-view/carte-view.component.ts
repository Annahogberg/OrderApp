import { Component, OnInit } from '@angular/core';
import { CarteService } from '../../../../services/carte.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { PARAMETERS } from '../../../../../node_modules/@angular/core/src/util/decorators';import { RestaurantService } from '../../../../services/restaurant.service';
import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-carte-view',
  templateUrl: './carte-view.component.html',
  styleUrls: ['./carte-view.component.css']
})
export class CarteViewComponent implements OnInit {

  user;
  restaurant;
  dishes;
  // isHidden: boolean = true;

  constructor(public restaurantService: RestaurantService, public carteService: CarteService, public sessionService: SessionService, private aR: ActivatedRoute) {
    this.aR.params.subscribe(params => 
      this.restaurantService.getRestaurant(params.id).subscribe(restaurant => {
        this.restaurant = restaurant
        this.carteService.getDishesPublic(this.restaurant._id)
        .subscribe(dishes => (this.dishes = dishes));
       
      }))
      this.sessionService.isLogged().subscribe(user => (this.user = user));
    }

  ngOnInit() {

  }


  // getDishes() {
  //   this.carteService.getDishesPublic(this.restaurant._id)
  //     .subscribe(dishes => (this.dishes = dishes));
  //     this.isHidden = !this.isHidden;
  // }


}
