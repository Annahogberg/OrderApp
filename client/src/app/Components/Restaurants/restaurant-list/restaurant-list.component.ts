import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../../services/restaurant.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurantList;
  restaurant;

  constructor(public restaurantService: RestaurantService, private aR: ActivatedRoute) {
    this.restaurantService.getRestaurantList().subscribe(restaurants => this.restaurantList = restaurants)
  }

  ngOnInit() {
  }
}