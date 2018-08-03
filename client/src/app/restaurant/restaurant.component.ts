import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { SessionService } from '../../services/session.service';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {


  restaurant;
  user;

  reservation
  date: string;
  time: string;
  pax: number;
  comment: string;

  constructor(public restaurantService: RestaurantService, public sessionService: SessionService, private aR: ActivatedRoute, private router: Router) {
    this.aR.params.subscribe(params =>
      this.restaurantService.getRestaurant(params.id).subscribe(restaurant => {
        this.restaurant = restaurant;
      })
    );
    this.sessionService.isLogged().subscribe(user=> this.user = user)
  }

  ngOnInit() {
  }

  reserve(date, time, pax, comment){
    const reservation = {
      date, 
      time, 
      pax, 
      comment,
      restaurant: this.restaurant._id,
      user: this.user._id
    }
  
    console.log("creating reservation....");

    this.restaurantService.reserve(reservation).subscribe( (reser:any) =>{
      this.router.navigate(['/profile']);
    });
  }

}

