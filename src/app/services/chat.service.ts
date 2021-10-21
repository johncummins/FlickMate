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
      .doc(chatId)
      .snapshotChanges()
      .pipe(
        map(doc => {
          return { id: doc.payload.id, ...doc.payload.data() };
        })
      );
  }

  getUserRecipientsChats(currentUser) {
    return this.afs
      .collection('chats', ref => ref.where('recipientsUid', 'array-contains', currentUser.uid))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data: Object = a.payload.doc.data();
            const id = a.payload.doc.id;
            console.log("THis is the id in the chat servce: ", id)
            return { id, ...data };
          });
        })
      );
  }

  getUserSentChats(currentUser) {
    return this.afs
      .collection('chats', ref => ref.where('uid', '==', currentUser.uid))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data: Object = a.payload.doc.data();
            const id = a.payload.doc.id;
            console.log("THis is the id of {{{{{{the sent chats }}}}}}in the chat servce: ", id)
            return { id, ...data };
          });
        })
      );
  }


  getChatID(otherUser) {
    // let otherUser = "9krRAy1dxKZJTe4xOd6VvMGQWvj2"
    var chatId = [];
    return this.auth.user$.pipe(
      switchMap(currentUser => {
        return this.afs
          // .collection('chats', ref => ref.where('chatUsers', '==', otherUser.uid).where('uid', '==', currentUser.uid))
          .collection('chats', ref => ref.where('recipientsUid', 'array-contains', otherUser.uid).where('uid', '==', currentUser.uid))
          .get().toPromise().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              // console.log(`${doc.id} => ${doc.data()}`);
              // console.log("Normla doc . id", doc.id)
              chatId.push(doc.id)
            });
            return chatId
          })
      })
    )
  }


  async create(sendToUid) {
    const { uid } = await this.auth.getUser();
    const otherUser = sendToUid
    console.log("This is wher the user object shoud be displayed(create chat func): ", otherUser)
    // const { uid } = await this.currentUserID

    const data = {
      uid,
      recipientsUid: [otherUser.uid],
      recipientsData: [otherUser],
      createdAt: Date.now(),
      count: 0,
      messages: []

    };

    const docRef = await this.afs.collection('chats').add(data);
    // return this.router.navigate(['chats', docRef.id]);
    return docRef.id;

  }

  async sendMessage(chatId, movieId, moviePoster, selectedRating, content) {
    const { uid } = await this.auth.getUser();

    const data = {
      uid,
      content,
      movieid: movieId,
      moviePoster: moviePoster,
      selectedRating: selectedRating,
      createdAt: Date.now()
    };

    if (uid) {
      const ref = this.afs.collection('chats').doc(chatId);
      return ref.update({
        messages: firebase.firestore.FieldValue.arrayUnion(data)
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
        messages: firebase.firestore.FieldValue.arrayRemove(msg)
      });
    }
  }

  joinUsers(chat$: Observable<any>) {
    let chat;
    const joinKeys = {};

    return chat$.pipe(
      switchMap(c => {
        // Unique User IDs
        chat = c;
        const uids = Array.from(new Set(c.messages.map(v => v.uid)));

        // Firestore User Doc Reads
        const userDocs = uids.map(u =>
          this.afs.doc(`users/${u}`).valueChanges()
        );

        return userDocs.length ? combineLatest(userDocs) : of([]);
      }),
      map(arr => {
        arr.forEach(v => (joinKeys[(<any>v).uid] = v));
        chat.messages = chat.messages.map(v => {
          return { ...v, user: joinKeys[v.uid] };
        });
        return chat;
      })
    );
  }
}
