import { Component, OnInit } from "@angular/core";
import { MapsAPILoader } from "@agm/core";
import { ViewChild, ElementRef, NgZone } from "@angular/core";
import { FormControl } from "@angular/forms";
import { RestaurantService } from "../../../../services/restaurant.service";
import { SessionService } from "../../../../services/session.service";
import {
  ActivatedRoute,
  Router
} from "../../../../../node_modules/@angular/router";
import { ReviewService } from "../../../../services/review.service";
import { FileUploader } from "ng2-file-upload";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-restaurant",
  templateUrl: "./restaurant.component.html",
  styleUrls: ["./restaurant.component.css"]
})
export class RestaurantComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `${environment.BASEURL}/api/reviews/newReview`
  });

  restaurant;
  user;

  reservation;
  date: string;
  time: string;
  pax: number;
  comment: string;

  content;
  rating;
  name;
  image;

  reviews;
  review;

  isHiddenReview: boolean = false;

  isPicture: boolean = false;

  toggleHidden(e) {
    this.isPicture = !this.isPicture;
  }

  lat: number;
  lng: number;

  constructor(
    public restaurantService: RestaurantService,
    public sessionService: SessionService,
    public reviewService: ReviewService,
    private aR: ActivatedRoute,
    private router: Router
  ) {
    this.aR.params.subscribe(params =>
      this.restaurantService.getRestaurant(params.id).subscribe(restaurant => {
        this.restaurant = restaurant;
      })
    );
    this.sessionService.isLogged().subscribe(user => (this.user = user));
  }



  ngOnInit() {}

  reserve(date, time, pax, comment) {
    const reservation = {
      date,
      time,
      pax,
      comment,
      restaurant: this.restaurant._id,
      user: this.user._id
    };

    this.restaurantService.reserve(reservation).subscribe((reser: any) => {
      this.router.navigate(["/profile"]);
    });
  }

  getReviews() {
    this.reviewService
      .getReviews(this.restaurant._id)
      .subscribe(reviews => (this.reviews = reviews));
      this.isHiddenReview = !this.isHiddenReview;
  }

  saveReviewWithImage() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append("name", this.name);
      form.append("rating", this.rating);
      form.append("content", this.content);
      form.append("restaurant", this.restaurant._id);
    };
    this.uploader.uploadAll();
    this.uploader.onSuccessItem = (item, response, status, headers) =>
      this.getReviews();
    this.rating = "";
    this.content = "";
    this.name = "";
  }

  saveReviewSimple(rating, content, name) {
    const reviewInfo = {
      restaurant: this.restaurant._id,
      content,
      rating,
      name
    };

    this.reviewService
      .saveReview(reviewInfo)
      .subscribe(() => this.getReviews());

    this.content = "";
    this.rating = "";
    this.name = "";
  }
}
