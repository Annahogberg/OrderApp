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


//import { Component, OnInit } from "@angular/core";
// import { SessionService } from "../../services/session.service";
// import { ActivatedRoute, Router } from "../../../node_modules/@angular/router";
// import { endWith } from "../../../node_modules/rxjs/operators";
// import { UserService } from "../../services/user.service";
// import { FileUploader } from 'ng2-file-upload';


// @Component({
//   selector: "app-user-edit",
//   templateUrl: "./user-edit.component.html",
//   styleUrls: ["./user-edit.component.css"]
// })
// export class UserEditComponent implements OnInit {

//   uploader: FileUploader = new FileUploader({
//     url: `http://localhost:3000/api/profile/edit/`, 
//     method: 'PUT'
//   });


//   user;


//     name: any;
//     email: any;
//     phone: any;
//     address: any;
//     type: any;
//     tables: any;
//     lunchopening: any;
//     lunchclosing: any;
//     dinneropening: any;
//     dinnerclosing: any;
//     age: any;


//   constructor(
//     public userService: UserService,
//     public sessionService: SessionService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {
//     this.route.params.subscribe(params =>
//       this.userService.get(params.id).subscribe(user => {
//         this.user = user;
//       })
//     );
//   }

//   ngOnInit() {

//     this.sessionService.isLogged().subscribe(user => {
//       this.name = user.name;
//       this.email = user.email;
//       this.phone = user.phone;
//       this.address = user.address;
//       this.type = user.type;
//       this.tables = user.tables;
//       this.lunchopening = user.lunchopening;
//       this.lunchclosing = user.lunchclosing;
//       this.dinneropening = user.dinneropening;
//       this.dinnerclosing = user.dinnerclosing;
//       this.age = user.age;
//     });

//    }
//    edit(user) {
//     this.uploader.onBuildItemForm = (item, form) => {
//       form.append('name', user.name);
//       form.append('email', user.email);
//       form.append('phone', user.phone);
//       form.append('address', user.address);
//       form.append('type', user.type);
//       form.append('tables', user.tables);
//       form.append('lunchopening', user.openinghours.openTime1);
//       form.append('lunchclosing', user.openinghours.closeTime1);
//       form.append('dinneropening', user.openinghours.openTime2);
//       form.append('dinnerclosing', user.openinghours.closeime2);
//       form.append('age', user.age);
//     };
//     this.uploader.uploadAll();
//     this.uploader.onCompleteItem = () => {
//       this.router.navigate(['/profile']);
//     };
//   }


//   }

