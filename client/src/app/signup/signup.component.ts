import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SessionService]
})
export class SignupComponent implements OnInit {

  username: string;
  password: string;
  email: string;
  isRestaurant: boolean;
  // firstname: string;
  // lastname: string;
  // age: number;
  
  constructor(private sessionService:SessionService, public router:Router) { }

  ngOnInit() {
  }

  signup(username, password, email, isRestaurant, isClient){
    console.log("signup....");
    this.sessionService.signup(username,password, email, isRestaurant, isClient).subscribe( (user:any) =>{
      console.log(`WELCOME USER ${user.username}, register OK`);
      //console.log(user);
      this.router.navigate(['/']);
    });
  }
}
