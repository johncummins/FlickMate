import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.page.html',
  styleUrls: ['./review-modal.page.scss'],
})
export class ReviewModalPage implements OnInit {

  @Input() movieToReviewID: string;
  @Input() movieToReviewTitle: string;
  inputtedReview: string;

  constructor(
    private modalCtr: ModalController,
    public reviewService: ReviewService

  ) { }

  ngOnInit() {
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }

  submitReview() {
    if (this.inputtedReview != null) {
      console.log("This is the review content: " + this.inputtedReview)
      this.reviewService.submitReview(this.movieToReviewID, this.inputtedReview)
    }
    else {
      window.alert('Please enter your review in the text box');
      return false;
    }


  }


}
