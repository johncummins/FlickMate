import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { ChatService } from '../services/chat.service';
import { FollowService } from '../services/follow.service';
import { ReadMovieService } from '../services/read-movie.service';
import { FindFriendsModalPage } from '../pages/find-friends-modal/find-friends-modal.page'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  // searchResults: any;
  sentRecommendations$;
  receivedRecommendations$;
  public segmentModel: string = 'received';
  currentUser = {} as User;
  allUsers$;
  modalDataResponse: any;



  constructor(public chatsService: ChatService, public auth: AuthService,
    private route: ActivatedRoute, public followService: FollowService, public modalCtrl: ModalController) { }

  async ngOnInit() {
    this.receivedRecommendations$ = this.chatsService.getUserRecipientsChats();
    this.receivedRecommendations$.subscribe((result) => {
      console.log("************ THis is the result from the get chats: ", result)
    })

  }

  getCategory() {
    this.sentRecommendations$ = this.chatsService.getUserSentChats()
    // console.log("This is hte userchat in the tab1: ", this.sentRecommendations$, 'recipientsUid');
    // for (i=0; i of sentRecommendations$)
    // this.sentRecommendations$.forEach(element => {
    //   console.log("THis is the sent observable", element)

    // });

    // const example = this.sentRecommendations$.pipe((filter(result => { return result[0].recipientsUid.includes("9krRAy1dxKZJTe4xOd6VvMGQWvj2") }
    // )))
    // const subscribe = example.subscribe(val =>
    //   console.log(`THE densel squash: ${val}`)
    // );

    this.sentRecommendations$.pipe(filter(result => result[0].recipientsUid >= 30))
  }

  async getCurrentUser() {
    this.currentUser = await this.auth.getUser();

  }

  async getAllUsers() {
    this.allUsers$ = this.followService.getUsers();
    console.log("This is the allUsers array: in tab1: ", this.allUsers$)

    // this.allUsers$.subscribe((result) => {
    //   console.log("This is the allusers obs:", result);
    // })

    const modal = await this.modalCtrl.create({
      component: FindFriendsModalPage,
      componentProps: {
        'allUsers$': this.allUsers$
      }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : ', modalDataResponse.data);
      }
    });
    return await modal.present();

  }

  //   <div *ngFor="let user of inUserFollowersArrObj | async">
  //   <app-user-profile-card [user]="user.data"></app-user-profile-card>
  // </div>
}
