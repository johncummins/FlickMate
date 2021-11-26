import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private afs: AngularFirestore, private auth: AuthService) {
  }

  async getUsers() {
    const docs = [];
    // Used to get all the users in the users collection
    const snapshot = await this.afs.collection(`users/`)
    snapshot.get().toPromise().then((querySnapshot) => {
      querySnapshot.docs.forEach(doc => {
        docs.push(doc.data());
      })
    })
    return docs;
  }

  getFollowers(userId: string) {
    // Used to build the follower count
    return this.afs.collection(`followers/`).doc(`${userId}`);
  }

  getFollowing(userId: string) {
    // Used to build the following count
    return this.afs.collection(`following/`).doc(`${userId}`);
  }

  getUserList(inUserListArr) {
    return this.afs.collection('users').get().toPromise()
      .then((collections) => {
        let userList = [];
        collections.forEach((doc) => {
          for (let index = 0; index < inUserListArr.length; index++) {
            if (doc.id == inUserListArr[index]) {
              userList.push({ id: doc.id, data: doc.data() });
            }
          }
        })
        return userList;
      })
  }

  isFollowing(followerId: string) {
    // Used to see if UserFoo if following UserBar
    return this.afs.collection(`following/`).doc(`${followerId}`);
  }

  follow(followerId: string, followedId: string) {
    const followerRef = this.afs.doc(`followers/${followedId}`);
    const followingRef = this.afs.doc(`following/${followerId}`);

    // if the follower id does not exist here then use set, otherwise use update
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
    this.afs.doc(`followers/${followedId}`).update({ [followerId]: firebase.firestore.FieldValue.delete() })
    this.afs.doc(`following/${followerId}`).update({ [followedId]: firebase.firestore.FieldValue.delete() })
    // this.afStore.doc(`following/${followedId}`).update({ [followerId]: null })
    // this.afStore.doc(`following/${followerId}`).update({ [followedId]: null })
  }
}
