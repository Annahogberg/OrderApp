import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../services/session.service";
import { ActivatedRoute, Router } from "../../../node_modules/@angular/router";
import { endWith } from "../../../node_modules/rxjs/operators";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.css"]
})
export class UserEditComponent implements OnInit {
  user;
  // types = [
  //   { value: 1, text: 'Italian' },
  //   { value: 2, text: 'Mediterranean' },
  //   { value: 3, text: 'Japanese' },
  //   { value: 4, text: 'Chinese' },
  //   { value: 5, text: 'Mexican' },
  //   { value: 2, text: 'Asian' },
  //   { value: 2, text: 'Vegetarian' },
  // ];


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
}
