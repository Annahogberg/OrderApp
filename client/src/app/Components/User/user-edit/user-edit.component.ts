import { Component, OnInit } from "@angular/core";

import { endWith } from "rxjs/operators";
import { UserService } from "../../../../services/user.service";
import { SessionService } from "../../../../services/session.service";
import { ActivatedRoute, Router } from "../../../../../node_modules/@angular/router";



@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.css"]
})
export class UserEditComponent implements OnInit {

  user;


  constructor(
    public userService: UserService,
    public sessionService: SessionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params =>
      this.userService.get(params.id).subscribe(user => {
        this.user = user;
      })
    );
  }

  ngOnInit() {}


  edit(user) {
    this.userService.edit(this.user).subscribe(user => {
      this.user = user;
      this.router.navigate(["/profile"]);
    });
  }

  placeMarker($event){
    console.log($event.coords.lat);
    console.log($event.coords.lng);
  }
}
