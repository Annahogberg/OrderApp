import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../../services/menu.service';
import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {

  user;
  appetizer;
  maincourse;
  dessert;
  drink;

  constructor(public menuService: MenuService, public sessionService: SessionService) { 
    this.sessionService.isLogged().subscribe(user => (this.user = user));
  }

  ngOnInit() {}

  getMenu() {
    this.menuService.getAppetizer().subscribe(appetizers => this.appetizer = appetizers);
    this.menuService.getMainCourse(this.user._id).subscribe(maincourses => this.maincourse = maincourses);
    this.menuService.getDessert(this.user._id).subscribe(desserts => this.dessert = desserts);
    this.menuService.getDrink(this.user._id).subscribe(drinks => this.drink = drinks);

  }


  deleteApp() {
    this.menuService.deleteApp(this.appetizer.id)
    .subscribe(() => console.log("deleted app"));
  }

  //  deleteMain() {
  //   this.menuService.deleteMain(this.maincourse.id)
  //   .subscribe(() => {this.getMenu(); return this.isHidden = !this.isHidden; });
  // }

  // deleteDessert() {
  //   this.menuService.deleteDessert(this.dessert.id)
  //   .subscribe(() => {this.getMenu(); return this.isHidden = !this.isHidden; });
  // }

  //  deleteDrink() {
  //   this.menuService.deleteDrink(this.drink.id)
  //   .subscribe(() => {this.getMenu(); return this.isHidden = !this.isHidden; });
  // }

}
