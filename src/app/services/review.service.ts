import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Review } from '../shared/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(
    public afStore: AngularFirestore,
    public nativeStorage: NativeStorage

  ) {
  }



  submitReview(userReview: Review) {
    console.log("THis is the movie eviewed ID: " + userReview.movieID)
    let movieReviewedIDStr = JSON.stringify(userReview.movieID)
    let authorIDStr = userReview.authorID;
    const userReviewRef = this.afStore.collection('posts').doc(movieReviewedIDStr).collection('userReviews')

    return userReviewRef.doc(authorIDStr).set(userReview, {
      merge: true,
    });

  }
}
