import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user;
  reservations;

  constructor(public sessionService: SessionService, private aR: ActivatedRoute) { 
    this.sessionService.isLogged().subscribe(user => this.user = user )
    console.log(this.user)
  }

  ngOnInit() {
  }

}
