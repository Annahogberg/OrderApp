import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../../services/menu.service';
import { SessionService } from '../../../../services/session.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent implements OnInit {

  user;
  appetizers;
  maincourses;
  desserts;
  drinks;

  isHidden: boolean = false;

  constructor(public menuService: MenuService, public sessionService: SessionService,  private router: Router) {
    this.sessionService.isLogged().subscribe(user => (this.user = user));
   }

  ngOnInit() {
    //this.menuService.getAppetizer(this.user._id).subscribe(appetizers => this.appetizers = appetizers);
  }
  
  getMenu() {
    this.menuService.getAppetizer().subscribe(appetizers => this.appetizers = appetizers);
    this.menuService.getMainCourse(this.user._id).subscribe(maincourses => this.maincourses = maincourses);
    this.menuService.getDessert(this.user._id).subscribe(desserts => this.desserts = desserts);
    this.menuService.getDrink(this.user._id).subscribe(drinks => this.drinks = drinks);
    this.isHidden = !this.isHidden  
  }

}
