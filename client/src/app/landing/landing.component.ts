import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public sessionService: SessionService) { }

  ngOnInit() {
  }

}
