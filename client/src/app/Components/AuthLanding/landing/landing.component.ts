import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { RestaurantService } from '../../../../services/restaurant.service';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  lat: number = 40.4268144;
  lng: number = -3.7037591;

  restaurantList;

  constructor(public rstaurantService: RestaurantService) {
    this.rstaurantService.getRestaurantList().subscribe(restaurants => this.restaurantList = restaurants)
  }

  ngOnInit() {
  }

}
