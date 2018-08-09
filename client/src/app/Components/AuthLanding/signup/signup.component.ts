import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../../services/session.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string;
  password: string;
  email: string;
  isRestaurant: boolean;
  isClient: boolean;

  message;

  constructor(private sessionService:SessionService, public router:Router) { }

  ngOnInit() {
  }

  signup(username, password, email, isRestaurant, isClient){
    this.sessionService.signup(username,password, email, isRestaurant, isClient).subscribe( user =>{
      if(user['status']>=500) {
        this.message = "Retry, please"
      } 
      else {
        this.router.navigate(['/login'])
      }; 
    });
  }

}