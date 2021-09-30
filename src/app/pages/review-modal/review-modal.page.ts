import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ModalController } from '@ionic/angular';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/models/review';
import { ReturnUser } from 'src/app/returnUser';


@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.page.html',
  styleUrls: ['./review-modal.page.scss'],
})
export class ReviewModalPage implements OnInit {

  @Input() movieToReviewID: string = '';
  @Input() movieToReviewTitle: string = '';
  @Input() movieToReviewPoster: string = '';
  inputtedReview: string = '';
  inputtedRating: number = null;
  inputtedTags: any = null;
  loggedInUserName: string = '';
  loggedInUserID: string = '';
  loggedInUserPhoto: string = '';

  test1;


  constructor(
    private modalCtr: ModalController,
    public reviewService: ReviewService,
    public nativeStorage: NativeStorage,
    public returnUser: ReturnUser
  ) {

  }

  ngOnInit() {
    let inputtedReviewText = this.inputtedReview
    console.log("The text", this.inputtedReview)
    this.nativeStorage.getItem('user')
      .then(
        loggedInUser => {
          console.log("This is the native data in the review service: ", loggedInUser.displayName)
          this.loggedInUserName = loggedInUser.displayName;
          this.loggedInUserID = loggedInUser.uid;
          this.loggedInUserPhoto = loggedInUser.photoURL;
        }
      );

  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }

  submitReview() {
    console.log("This is the review content FIRST: ", this.inputtedReview)
    if (this.inputtedReview != null) {
      const currentDate = new Date()
      // console.log("Current Date ", currentDate)

      const userReview: Review = {
        date: currentDate,
        likes: null,
        movieID: this.movieToReviewID,
        rating: this.inputtedRating,
        tags: this.inputtedTags,
        content: this.inputtedReview,
        title: this.movieToReviewTitle,
        comments: null,
        authorName: this.loggedInUserName,
        authorID: this.loggedInUserID,
        authorPhoto: this.loggedInUserPhoto
      };
      console.log("This is the review content: ", this.inputtedReview)
      console.log("This is the review tags: ", this.inputtedTags)
      this.reviewService.submitReview(userReview)
      this.close();
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
