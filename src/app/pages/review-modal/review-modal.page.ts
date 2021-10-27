import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/models/review';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.page.html',
  styleUrls: ['./review-modal.page.scss'],
})
export class ReviewModalPage implements OnInit {

  @Input() movieID: string;
  @Input() movieTitle: string = '';
  @Input() moviePoster: string = '';
  inputtedReview: string = '';
  inputtedRating: number = null;
  inputtedTags: any = null;
  loggedInUserName: string = '';
  loggedInUserID: string = '';
  loggedInUserPhoto: string = '';
  currentUser = {} as User;

  selected = 0;
  hovered = 0;
  readonly = false;

  constructor(
    private modalCtr: ModalController,
    public reviewService: ReviewService,
    public auth: AuthService,
  ) {

  }

  async ngOnInit() {
    console.log("The text", this.inputtedReview)
    this.currentUser = await this.auth.getUser();
    this.loggedInUserName = this.currentUser.displayName;
    this.loggedInUserID = this.currentUser.uid;
    this.loggedInUserPhoto = this.currentUser.photoURL;
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }

  submitReview() {
    console.log("This is the review content FIRST: ", this.inputtedReview)
    console.log("This is the movie to review ID: ", this.movieID)
    if (this.inputtedReview !== "") {
      const currentDate = new Date()

      const userReview: Review = {
        date: currentDate,
        likes: null,
        movieID: this.movieID,
        rating: this.inputtedRating,
        tags: this.inputtedTags,
        content: this.inputtedReview,
        title: this.movieTitle,
        comments: null,
        authorName: this.loggedInUserName,
        authorID: this.loggedInUserID,
        authorPhoto: this.loggedInUserPhoto
      };
      this.reviewService.submitReview(userReview)
      this.close();
    }
    else if (this.movieID !== undefined) {
      console.log("Movie ID is not defined ", this.movieID)
    }
    else {
      window.alert('Please enter your review in the text box');
      return false;
    }
  }
  changeing(event: any) {
    console.log(event)
    this.inputtedReview = event;
  }
}
