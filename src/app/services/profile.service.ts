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
    // where currentUser has rated back on
    if (inputtedUser == currentUser) {
      // get the all the recommendations that the current user has sent
      console.log("This is the current users profile: ")
    }
    else if (inputtedUser !== currentUser) {
      console.log("THis is hte inputted user: ", inputtedUser.uid)
      console.log("THis is hte current user: ", currentUser)
      let recRef = this.afStore.collection('ratings').doc(`${inputtedUser.uid}`).collection('sentTo').doc(`${currentUser}`)
      return recRef.snapshotChanges()
        .pipe(
          map(doc => {
            // console.log("THis is the payload data in get rec in the service: ", doc)

            return [{ id: doc.payload.id, ...doc.payload.data() }];
          },
            async (err) => {
              console.log("Heres the error: ", err.message);
            })
        );

    }
    else {
      console.log("some error with one of the users")
    }

  }
}


