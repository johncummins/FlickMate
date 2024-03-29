import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
// import { AuthenticationService } from '../../shared/authentication-service';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { RateBackModalPage } from 'src/app/pages/rate-back-modal/rate-back-modal.page';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chat$: Observable<any>;
  newMsg: string;
  currentUser;
  chatObservable
  currentUserID;
  isReceiver: boolean;
  modalDataResponse: any;
  showTick: boolean = false;
  showTickRB: boolean = false;


  constructor(
    public cs: ChatService,
    public auth: AuthService,
    private route: ActivatedRoute,
    private profileService: ProfileService, public modalCtrl: ModalController,
    public toastController: ToastController

  ) { }

  async ngOnInit() {
    this.currentUser = await this.auth.getUser();
    this.currentUserID = this.currentUser.uid

    const chatId = this.route.snapshot.paramMap.get('id');
    const source = this.cs.getChanges(chatId);
    this.chat$ = this.cs.joinUsers(source);
    this.scrollBottom();

    // let recommendationsChat = this.chat$
    console.log("THis is the chat in ng on init", this.chat$);


    this.chatObservable = this.chat$.subscribe(event => {
      let chat = event
      let recipientsUidArr = chat.recipientsUid
      if (this.currentUser.uid == chat.senderUid) {
        console.log("THis is the sender of this convo", chat);
        this.isReceiver = false;
      }

      else if (recipientsUidArr.includes(this.currentUser.uid)) {
        console.log("THis is the receiver of this convo", recipientsUidArr);
        this.isReceiver = true;
      }

      else {
        console.log("This  person is nothing to do with it ")
      }

    })
  }

  submit(chatId) {
    if (!this.newMsg) {
      return alert('You need to enter some text');
    }
    this.cs.sendRecommedation(chatId, null, null, this.newMsg);
    this.newMsg = '';
    this.scrollBottom();
  }

  trackByCreated(i, msg) {
    return msg.createdAt;
  }

  private scrollBottom() {
    setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 500);
  }

  async addMovieToWatchlist(movieID) {
    // console.log("THIS IS THE MOVIE OF THE MOVIE THAT WAS CLICKED:", movieID);
    this.presentToast();
    console.log("THis is the mvieID in the addTomoveirWatchlist: ", movieID)
    this.showTick = true;
    this.profileService.writeProfileContent(this.currentUser.uid, "watchlist", movieID);

  }

  async rateBack(rec) {
    console.log("THis is the rec: ", rec);
    // let index = chat.recommendations.findIndex(rec => rec.movieId == movieID);
    // console.log(index);
    const modal = await this.modalCtrl.create({
      component: RateBackModalPage,
      componentProps: {
        'senderDetails': {
          uid: rec.uid,
          displayName: rec.user.displayName,
          photoURL: rec.user.photoURL,
        },
        'coreMovieDetails':
        {
          movieID: rec.movieId,
          movieTitle: rec.movieTitle,
          moviePoster: rec.moviePoster,
          releaseYear: rec.releaseYear
        },
        'senderRating': rec.senderRating
      }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : ', modalDataResponse.data);
        this.showTickRB = true;

      }
    });
    return await modal.present();
  }

  checkIfCurrentUser(userToCheck) {
    if (userToCheck == this.currentUserID) {
      return true;
    }

    else {
      return false;

    }
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Added to your watchlist',
      duration: 2000,
      color: 'tertiary'
    });
    toast.present();
  }

  ngOnDestroy() {
    this.chatObservable.unsubscribe();
  }
}
