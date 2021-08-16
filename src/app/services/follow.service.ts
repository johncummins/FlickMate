import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import * as firebase from 'firebase/app';
// import { firestore } from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private afStore: AngularFirestore,
    public nativeStorage: NativeStorage,
  ) {

  }

  getFollowers(userId: string) {
    // Used to build the follower count
    return this.afStore.collection(`followers/`).doc(`${userId}`);
  }

  getFollowing(followerId: string) {
    // Used to see if UserFoo if following UserBar
    return this.afStore.collection(`following/`).doc(`${followerId}`);

  }

  follow(followerId: string, followedId: string) {
    // if the follower id does not exist here then use set, otherwise use update
    this.afStore.doc(`followers/${followedId}`).update({ [followerId]: true })
    this.afStore.doc(`following/${followerId}`).update({ [followedId]: true })
  }

  unfollow(followerId: string, followedId: string) {
    // this.afStore.doc(`followers/${followedId}`).update({"capital": firebase.firestore.FieldValue.delete()})
    this.afStore.doc(`following/${followedId}`).update({ [followerId]: null })
    this.afStore.doc(`following/${followerId}`).update({ [followedId]: null })
  }

}
