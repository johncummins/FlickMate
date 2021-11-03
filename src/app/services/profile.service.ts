import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private afStore: AngularFirestore,) { }

  getProfileContent(userId: string, category: string) {
    let top10Ref = this.afStore.collection(`users/`).doc(`${userId}`).collection('profileContent').doc(`${category}`);
    return top10Ref;
  }

  writeProfileContent(userId: string, category: string, movieId: string) {
    console.log("THis is the id in the profileservice:", userId)

    // const docRef = await this.afs.collection('chats').add(data);
    let profileContentRef = this.afStore.collection(`users/`).doc(`${userId}`)
      .collection('profileContent').doc(`${category}`)

    return profileContentRef.set({
      items: firebase.firestore.FieldValue.arrayUnion(movieId)
    },
      { merge: true });
  }



  getRecommendations(inputtedUser, currentUser) {
    if (inputtedUser.uid !== currentUser) {
      let recRef = this.afStore.collection('ratings').doc(`${inputtedUser.uid}`).collection('sentTo').doc(`${currentUser}`)
      return recRef.snapshotChanges()
        .pipe(
          map(doc => {
            if (doc.payload.exists) {
              const data = doc.payload.data().ratingsArr;
              data.totalRatingDiff = doc.payload.data().totalRatingDiff;;
              return data;
              // return { id: doc.payload.id, ...doc.payload.data() };
            }
            else {
              return console.error("Doc doesnt exist");
            }

          },
            async (err) => {
              console.log("Heres the error: ", err.message);
            })
        );

    }

  }


  getTotalRatingDiff(inputtedUser, currentUser) {
    if (inputtedUser.uid !== currentUser) {
      let recRef = this.afStore.collection('ratings').doc(`${inputtedUser.uid}`).collection('sentTo').doc(`${currentUser}`)
      return recRef.snapshotChanges()
        .pipe(
          map(doc => {
            if (doc.payload.exists) {
              const totalRatingDiff = doc.payload.data().totalRatingDiff;;
              return totalRatingDiff;
            }
            else {
              return console.error("Doc doesnt exist");
            }
          },
            async (err) => {
              console.log("Heres the error: ", err.message);
            })
        );
    }
  }
}

