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
  isClient: boolean;

  constructor(private sessionService:SessionService, public router:Router) { }

  ngOnInit() {
  }

  signup(username, password, email, isRestaurant, isClient){
    this.sessionService.signup(username,password, email, isRestaurant, isClient).subscribe( (user:any) =>{
      this.router.navigate(['/']);
    });
  }
}
