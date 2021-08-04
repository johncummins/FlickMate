import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Review } from '../shared/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  loggedInUserID: string;
  constructor(
    public afStore: AngularFirestore,
    public nativeStorage: NativeStorage

  ) {
    this.nativeStorage.getItem('user')
      .then(
        loggedInUser => {
          console.log("This is the native data in the review service: " + loggedInUser.uid)
          this.loggedInUserID = loggedInUser.uid;
        }
      );
  }



  submitReview(movieReviewedID, reviewContent) {
    const userReviewRef = this.afStore.collection('posts').doc(movieReviewedID).collection('userReviews')
    // const userReviewRef = this.afStore.collection('posts').doc('${user.uid}').collection('userReviews')
    const currentDate = new Date()
    console.log("Current Date " + currentDate)

    const userReview: Review = {
      date: currentDate,
      likes: 23,
      movieID: movieReviewedID,
      rating: 9,
      tags: "boolean",
      content: reviewContent,
      title: "string"
    };

    return userReviewRef.doc(this.loggedInUserID).set(userReview, {
      merge: true,
    });

    // usersRef1.get().toPromise().then((doc) => {
    //   if (doc.exists) {
    //     console.log("Document data:", doc.data());
    //   } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    //   }
    // }).catch((error) => {
    //   console.log("Error getting document:", error);
    // });
  }
}
