import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { RestaurantService } from '../../services/restaurant.service';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {


  restaurant;

  constructor(public restaurantService: RestaurantService, private aR: ActivatedRoute, private router: Router) {
    this.aR.params.subscribe(params =>
      this.restaurantService.getRestaurant(params.id).subscribe(restaurant => {
        console.log(restaurant)
        this.restaurant = restaurant;
      })
    );
  }

  ngOnInit() {
  }


}

