import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  // currentUserID;
  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private router: Router,
  ) {

  }

  get(chatId) {
    return this.afs
      .collection<any>('chats')
      .doc(chatId).get()
      .pipe(
        map(doc => {
          return { id: doc.id, ...doc.data() };
        })
      );
  }

  getChanges(chatId) {
    return this.afs
      .collection<any>('chats')
      .doc(chatId)
      .snapshotChanges()
      .pipe(
        map(doc => {
          return { id: doc.payload.id, ...doc.payload.data() };
        })
      );
  }


  // gets all the chats/recommednations that the user received
  getUserRecipientsChats() {
    return this.auth.user$.pipe(
      switchMap(user => {
        return this.afs
          .collection('chats', ref => ref.where('recipientsUid', 'array-contains', user.uid))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                const data: Object = a.payload.doc.data();
                const id = a.payload.doc.id;
                // console.log("THis is the id in the chat servce: ", id)
                return { id, ...data };
              });
            })
          );
      })
    );
  }


  //gets all the chats/recommednations that the user sent
  getUserSentChats() {
    return this.auth.user$.pipe(
      switchMap(user => {
        return this.afs
          .collection('chats', ref => ref.where('senderUid', '==', user.uid))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                const data: Object = a.payload.doc.data();
                const id = a.payload.doc.id;
                // console.log("THis is the id in the chat servce: ", id)
                return { id, ...data };
              });
            })
          );
      })
    );
  }

  //checks for chats where the current user is the sender
  getChatID(otherUser) {
    var chatId = [];
    return this.auth.user$.pipe(
      switchMap(currentUser => {
        return this.afs
          .collection('chats', ref => ref.where('recipientsUid', 'array-contains', otherUser.uid).where('senderUid', '==', currentUser.uid))
          .get().toPromise().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              chatId.push(doc.id)
            });
            return chatId
          })
      })
    )
  }


  async create(sendToUid) {
    let currentUser = await this.auth.getUser();
    const otherUser = sendToUid
    const data = {
      senderUid: currentUser.uid,
      senderData: currentUser,
      recipientsUid: [otherUser.uid],
      recipientsData: [otherUser],
      createdAt: Date.now(),
      count: 0,
      recommendations: [],
      moviesRated: []
    };
    const docRef = await this.afs.collection('chats').add(data);
    return docRef.id;
  }

  async sendRecommedation(chatId, coreMovieDetails, senderRating, message) {
    const { uid } = await this.auth.getUser();
    const ref = this.afs.collection('chats').doc(chatId);
    // check if the uid exists and the movieId is not null also increase counter
    if (uid && coreMovieDetails != null) {
      const data = {
        uid,
        message,
        movieId: coreMovieDetails.movieID,
        moviePoster: coreMovieDetails.moviePoster,
        movieTitle: coreMovieDetails.movieTitle,
        senderRating,
        createdAt: Date.now()
      };
      return ref.update({
        recommendations: firebase.firestore.FieldValue.arrayUnion(data),
        moviesRecommended: firebase.firestore.FieldValue.arrayUnion(coreMovieDetails.movieID),
        count: firebase.firestore.FieldValue.increment(1)
      });
    }
    else if (uid) { // check if the uid exists - then just update the recommendations and not the counter, as no movie is present
      const dataNoMovie = {
        uid,
        message,
        movieId: null,
        moviePoster: null,
        movieTitle: null,
        senderRating: null,
        createdAt: Date.now()
      };

      return ref.update({
        recommendations: firebase.firestore.FieldValue.arrayUnion(dataNoMovie),
      });
    }
  }

  async deleteMessage(chat, msg) {
    const { uid } = await this.auth.getUser();

    const ref = this.afs.collection('chats').doc(chat.id);
    console.log(msg);
    if (chat.uid === uid || msg.uid === uid) {
      // Allowed to delete
      delete msg.user;
      return ref.update({
        recommendations: firebase.firestore.FieldValue.arrayRemove(msg)
      });
    }
  }


  // Code taken directly from Fireship (see report for details)
  joinUsers(chat$: Observable<any>) {
    let chat;
    const joinKeys = {};

    return chat$.pipe(
      switchMap(c => {
        // Unique User IDs
        chat = c;
        const uids = Array.from(new Set(c.recommendations.map(v => v.uid)));

        // Firestore User Doc Reads
        const userDocs = uids.map(u =>
          this.afs.doc(`users/${u}`).valueChanges()
        );

        return userDocs.length ? combineLatest(userDocs) : of([]);
      }),
      map(arr => {
        arr.forEach(v => (joinKeys[(<any>v).uid] = v));
        chat.recommendations = chat.recommendations.map(v => {
          return { ...v, user: joinKeys[v.uid] };
        });
        return chat;
      })
    );
  }


  async addRateBack(senderUid, coreMovieDetails, senderRating, rateBack) {
    let ratingDiff = 0;
    let currentUser = await this.auth.getUser();
    const currentUserId = currentUser.uid
    const ref = this.afs.collection('ratings').doc(senderUid).collection('sentTo').doc(currentUserId);

    // if the senders rating is higher than the rateBack then add a
    // minus before the num, to indicate its lower
    if (senderRating > rateBack) {
      ratingDiff = senderRating - rateBack;
      ratingDiff = ratingDiff * -1
    }
    // else if the senders rating is lower than the rateBack then add a
    // take the absolute value
    else if (senderRating < rateBack) {
      ratingDiff = Math.abs(senderRating - rateBack);
    }

    let ratingObject = {
      ratingDiff,
      movieID: coreMovieDetails.movieID,
      movieTitle: coreMovieDetails.movieTitle,
      moviePoster: coreMovieDetails.moviePoster,
      senderRating,
      rateBack,
      senderID: currentUserId
    }

    return ref.set({
      ratingsArr: firebase.firestore.FieldValue.arrayUnion(ratingObject),
      totalRatingDiff: firebase.firestore.FieldValue.increment(ratingDiff)
    },
      { merge: true });
  }
}
