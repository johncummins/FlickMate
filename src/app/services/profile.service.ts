import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private afStore: AngularFirestore,) { }


  getProfileContent(userId: string, category: string) {
    // Used to build the follower count
    let top10Ref = this.afStore.collection(`users/`).doc(`${userId}`).collection('profileContent').doc(`${category}`);
    return top10Ref;
  }
}


