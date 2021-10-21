import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { ChatService } from '../services/chat.service';
import { ReadMovieService } from '../services/read-movie.service';

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


  constructor(public chatsService: ChatService, public auth: AuthService,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    this.currentUser = await this.auth.getUser();
    this.receivedRecommendations$ = this.chatsService.getUserRecipientsChats(this.currentUser);
    console.log("This is hte userchat in the tab1: ", this.receivedRecommendations$)

  }

  getCategory() {
    this.sentRecommendations$ = this.chatsService.getUserSentChats(this.currentUser);
    console.log("This is hte userchat in the tab1: ", this.sentRecommendations$, 'recipientsUid')
  }
}
