import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { ProfileService } from 'src/app/services/profile.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-rate-back-modal',
  templateUrl: './rate-back-modal.page.html',
  styleUrls: ['./rate-back-modal.page.scss'],
})
export class RateBackModalPage implements OnInit {

  selectedRating = 0;
  readonly = false;

  @Input() senderDetails;
  @Input() coreMovieDetails;
  @Input() senderRating: number;

  senderUid;
  currentUserID;
  combinedTotDiff: number = 0;
  combinedTotDiffStr: string;

  receivedRecs$;
  sentRecs$;

  constructor(
    public modalCtr: ModalController, public cs: ChatService, private afs: AngularFirestore,
    private profile: ProfileService, public auth: AuthService) { }

  ngOnInit() {
    this.senderUid = this.senderDetails.uid;
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }

  async submitRateBack() {
    const { uid } = await this.auth.getUser();
    this.currentUserID = uid
    console.log("THis is hte submit rate back button: ", this.selectedRating, "Movei ID: ", this.coreMovieDetails.movieID);
    if (this.selectedRating !== 0) {
      console.log('This is the sRating: ', this.selectedRating)
      this.cs.addRateBack(this.senderUid, this.coreMovieDetails, this.senderRating, this.selectedRating);
      this.getDiffRating()
      this.close();
    }
    else if (this.selectedRating == 0) {
      return alert('Please add a rating');
    }
  }

  // this function gets the rating diff from the recieved recommendations and then calls getSentDiffRating();
  getDiffRating() {
    this.combinedTotDiff = 0;
    if (this.senderUid !== this.currentUserID) {
      this.receivedRecs$ = this.profile.getTotalRatingDiff(this.senderUid, this.currentUserID);
      this.receivedRecs$.subscribe((result: number) => {
        this.combinedTotDiff = result;
        this.combinedTotDiffStr = this.combinedTotDiff.toString();
        console.log("************ THis is the total diff from the recieved: ", this.combinedTotDiff);
        this.getSentDiffRating();
      })
    }
    else {
      console.log("Error retireving the ids with one of the users");
    }
  }

  // this function gets the rating diff from the sent recommendations and adds it to the reciived rating diff
  getSentDiffRating() {
    this.sentRecs$ = this.profile.getTotalRatingDiff(this.currentUserID, this.senderUid);
    this.sentRecs$.subscribe((result: number) => {
      if (result !== undefined) {
        let invertedResult = result * -1
        this.combinedTotDiff += invertedResult;
        console.log("THis is the recevied + sent total diff: ", this.combinedTotDiff);
      }
      else {
        console.log("No rating differncem this is the combinedTotDiff: ", this.combinedTotDiff);
      }
      if (this.combinedTotDiff <= 0) {
        this.combinedTotDiffStr = this.combinedTotDiff.toString()
        console.log("THis rating diff is less than zero: ", this.combinedTotDiffStr);
      }
      else {
        console.log("THis rating diff is more than zero");
        this.combinedTotDiffStr = "+" + this.combinedTotDiff;
      }
      // calls a function to post the the total (sent & recieved) rating diff to Firestore
      this.postDiffRatingToFire(this.combinedTotDiffStr);
    })
  }
  // posts the computed combined rating diff to firestore
  postDiffRatingToFire(combinedTotDiff) {
    const ref = this.afs.collection('ratingDifferences').doc(this.currentUserID).collection('for').doc(this.senderUid);

    return ref.set({
      combinedRating: combinedTotDiff,
      displayName: this.senderDetails.displayName,
      photoURL: this.senderDetails.photoURL,
      uid: this.senderUid
    },
      { merge: true });
  }

  ngOnDestroy() {
    console.log("@@@@@ Unsubscribed: - receivedRecs$ & receivedRecs$ @@@@@@")
    this.receivedRecs$.unsubscribe();
    this.sentRecs$.unsubscribe();
  }
}
