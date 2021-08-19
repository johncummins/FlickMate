import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import firebase from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private afStore: AngularFirestore,
    public nativeStorage: NativeStorage,
  ) {
  }



  getUsers() {
    // Used to build the follower count
    return this.afStore.collection(`users/`);
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
    const followerRef = this.afStore.doc(`followers/${followedId}`);
    const followingRef = this.afStore.doc(`following/${followerId}`);

    followerRef.get().toPromise()
      .then(docSnapshot => {
        if (docSnapshot.exists) {
          followerRef.update({ [followerId]: true })
        }
        else {
          followerRef.set({ [followerId]: true })
        }
      });

    followingRef.get().toPromise()
      .then(docSnapshot => {
        if (docSnapshot.exists) {
          followingRef.update({ [followedId]: true })
        }
        else {
          followingRef.set({ [followedId]: true })
        }
      });


    // if (followerRef) {
    //   followerRef.update({ [followerId]: true })
    // } else {
    //   followerRef.set({ [followerId]: true })
    // }

    // if (true) {
    //   followerRef.update({ [followedId]: true })
    // }
    // else {
    //   followingRef.set({ [followedId]: true })
    // }
  }

  unfollow(followerId: string, followedId: string) {
    this.afStore.doc(`followers/${followedId}`).update({ [followerId]: firebase.firestore.FieldValue.delete() })
    this.afStore.doc(`following/${followerId}`).update({ [followedId]: firebase.firestore.FieldValue.delete() })
    // this.afStore.doc(`following/${followedId}`).update({ [followerId]: null })
    // this.afStore.doc(`following/${followerId}`).update({ [followedId]: null })
  }
}