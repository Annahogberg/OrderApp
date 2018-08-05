import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../../services/menu.service';
import { SessionService } from '../../../../services/session.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.css']
})
export class NewMenuComponent implements OnInit {

  user;
  
  appetizers; maincourses; desserts; drinks;

  appTitle; appDescription; appPrice;

  mainTitle; mainDescription; mainPrice;

  dessertTitle; dessertDescription; dessertPrice;

  drinkTitle; drinkDescription; drinkPrice; drinkType;

  isHidden: boolean = false;


  constructor(public menuService: MenuService, public sessionService: SessionService,  private router: Router) { 
    this.sessionService.isLogged().subscribe(user => (this.user = user));
  }

  ngOnInit() {}

  getMenu() {
    this.menuService.getAppetizer(this.user._id).subscribe(appetizers => this.appetizers = appetizers);
    this.menuService.getMainCourse(this.user._id).subscribe(maincourses => this.maincourses = maincourses);
    this.menuService.getDessert(this.user._id).subscribe(desserts => this.desserts = desserts);
    this.menuService.getDrink(this.user._id).subscribe(drinks => this.drinks = drinks);
    this.isHidden = !this.isHidden  
  }

  createAppetizer(appTitle, appDescription, appPrice) {
    const appetizer = { appTitle, appDescription, appPrice, restaurant: this.user._id};

    this.menuService.createAppetizer(appetizer).subscribe(() => {
      this.router.navigate(['/menu/newMenu'])})
    
    this.appTitle = "";
    this.appDescription = "";
    this.appPrice = "";
  
  }

  createMainCourse(mainTitle, mainDescription, mainPrice) {
    const maincourse = { mainTitle, mainDescription, mainPrice, restaurant: this.user._id,
    };

    this.menuService.createMainCourse(maincourse).subscribe(() => {
      this.router.navigate(['/menu/newMenu'])});

    this.mainTitle = "";
    this.mainDescription = "";
    this.mainPrice = "";
  }

  createDessert(dessertTitle, dessertDescription, dessertPrice) {
    const dessert = {dessertTitle, dessertDescription, dessertPrice,restaurant: this.user._id,
    };

    this.menuService.createDessert(dessert).subscribe(() => {
      this.router.navigate(['/menu/newMenu'])})
    
    this.dessertTitle = "";
    this.dessertDescription = "";
    this.dessertPrice = "";
  
  }

  createDrink(drinkTitle, drinkDescription, drinkPrice, drinkType) {
    const drink = { drinkTitle, drinkDescription, drinkPrice, drinkType, restaurant: this.user._id};

    this.menuService.createDrink(drink).subscribe(() => {
      this.router.navigate(['/menu/newMenu'])});

    this.drinkTitle = "";
    this.drinkDescription = "";
    this.drinkPrice = "";
    this.drinkType = "";
  }


  deleteApp() {
    this.menuService.removeApp(this.appetizers.id)
    .subscribe(() => {this.getMenu(); return this.isHidden = !this.isHidden; });
  }

   deleteMain() {
    this.menuService.removeMain(this.maincourses.id)
    .subscribe(() => {this.getMenu(); return this.isHidden = !this.isHidden; });
  }

  deleteDessert() {
    this.menuService.removeDessert(this.desserts.id)
    .subscribe(() => {this.getMenu(); return this.isHidden = !this.isHidden; });
  }

   deleteDrink() {
    this.menuService.removeDrink(this.drinks.id)
    .subscribe(() => {this.getMenu(); return this.isHidden = !this.isHidden; });
  }
}
