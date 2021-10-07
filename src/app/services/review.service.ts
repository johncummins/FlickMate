import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(
    public afStore: AngularFirestore,

  ) {
  }

  submitReview(userReview: Review) {
    console.log("THis is the movie eviewed ID: ", userReview.movieID)
    let movieReviewedIDStr = JSON.stringify(userReview.movieID)
    let authorIDStr = userReview.authorID;
    const userReviewRef = this.afStore.collection('posts').doc(movieReviewedIDStr).collection('userReviews')

    return userReviewRef.doc(authorIDStr).set(userReview, {
      merge: true,
    });

  }
}
