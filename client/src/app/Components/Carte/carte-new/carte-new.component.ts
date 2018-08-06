import { Component, OnInit } from '@angular/core';
import { CarteService } from '../../../../services/carte.service';
import { SessionService } from '../../../../services/session.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-carte-new',
  templateUrl: './carte-new.component.html',
  styleUrls: ['./carte-new.component.css']
})
export class CarteNewComponent implements OnInit {

  user;
  dishes;

  dish;

  title;
  description;
  price;
  type;

  isHidden: boolean = false;

  constructor(public carteService: CarteService, public sessionService: SessionService, private router: Router) { 
    this.sessionService.isLogged().subscribe(user => (this.user = user));
  }

  ngOnInit() {
  }
  
  getDishes(){
    this.carteService.getDishes(this.user._id).subscribe(dishes => this.dishes = dishes);
    this.isHidden = !this.isHidden
  }
  

  createDish(title, description, price, type){
    const dish = {title, description, price, type, restaurant: this.user._id};

    this.carteService.createDish(dish).subscribe(() => {this.getDishes(); this.isHidden = !this.isHidden})

    this.title = "";
    this.description = "";
    this.price = "";
    this.type = "";
  }

}
