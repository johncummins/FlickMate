import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private afStore: AngularFirestore,
  ) {
  }

  getUsers() {
    // Used to build the follower count
    return this.afStore.collection(`users/`);
    // return this.afStore.collection(`users/`).doc(`${userToSearch}`);
  }

  getFollowers(userId: string) {
    // Used to build the follower count
    return this.afStore.collection(`followers/`).doc(`${userId}`);
  }

  getFollowing(userId: string) {
    // Used to build the following count
    return this.afStore.collection(`following/`).doc(`${userId}`);
  }

  isFollowing(followerId: string) {
    // Used to see if UserFoo if following UserBar
    return this.afStore.collection(`following/`).doc(`${followerId}`);
  }

  follow(followerId: string, followedId: string) {
    // if the follower id does not exist here then use set, otherwise use update
    const followerRef = this.afStore.doc(`followers/${followedId}`);
    const followingRef = this.afStore.doc(`following/${followerId}`);

    followerRef.get().toPromise()
      .then(docSnapshot => {
        if (docSnapshot.exists && followerId == undefined)
          console.log("Error: cannot add follower, The user is not defined (not logged in)")
        else if (docSnapshot.exists)
          followerRef.update({ [followerId]: true })
        else
          followerRef.set({ [followerId]: true })
      });

    followingRef.get().toPromise()
      .then(docSnapshot => {
        if (docSnapshot.exists && followerId == undefined)
          console.log("Error: cannot add following, The user is not defined (not logged in)")
        else if (docSnapshot.exists)
          followingRef.update({ [followedId]: true })
        else
          followingRef.set({ [followedId]: true })
      });
  }

  unfollow(followerId: string, followedId: string) {
    this.afStore.doc(`followers/${followedId}`).update({ [followerId]: firebase.firestore.FieldValue.delete() })
    this.afStore.doc(`following/${followerId}`).update({ [followedId]: firebase.firestore.FieldValue.delete() })
    // this.afStore.doc(`following/${followedId}`).update({ [followerId]: null })
    // this.afStore.doc(`following/${followerId}`).update({ [followedId]: null })
  }
}
