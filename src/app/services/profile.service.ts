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
    // // return top10Ref;
    // return userRef.set(userData, {
    //   merge: true,
    // });
  }
}


