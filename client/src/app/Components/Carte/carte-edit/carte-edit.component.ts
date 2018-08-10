import { Component, OnInit } from "@angular/core";
import { CarteService } from "../../../../services/carte.service";
import { ActivatedRoute, Router } from "../../../../../node_modules/@angular/router";

@Component({
  selector: "app-carte-edit",
  templateUrl: "./carte-edit.component.html",
  styleUrls: ["./carte-edit.component.css"]
})
export class CarteEditComponent implements OnInit {
  dish;

  constructor(public carteService: CarteService, private aR: ActivatedRoute, private router: Router) {
    this.aR.params.subscribe(params =>{
     
      this.carteService.getDetails(params.id).subscribe(dish => {
      
        this.dish = dish;
      })
    });
  }

  ngOnInit() {}

  editDish() {

    this.carteService.editDish(this.dish).subscribe(dish => {
      this.dish = dish;
      this.router.navigate(["carte/new"]);

    });
  }

  deleteDish(){
    this.carteService.deleteDish(this.dish).subscribe(dish => {
      this.dish = dish
    })
  }
}
