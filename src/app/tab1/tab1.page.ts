import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
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
    this.receivedRecommendations$ = this.chatsService.getUserRecipientsChats();
    console.log("This is hte userchat in the tab1: ", this.receivedRecommendations$)

  }

  getCategory() {
    this.sentRecommendations$ = this.chatsService.getUserSentChats()
    console.log("This is hte userchat in the tab1: ", this.sentRecommendations$, 'recipientsUid');
    // for (i=0; i of sentRecommendations$)
    this.sentRecommendations$.forEach(element => {
      console.log("THis is the sent observable", element)

    });

    const example = this.sentRecommendations$.pipe((filter(result => { return result[0].recipientsUid.includes("9krRAy1dxKZJTe4xOd6VvMGQWvj2") }
    )))
    const subscribe = example.subscribe(val =>
      console.log(`THE densel squash: ${val}`)
    );

    this.sentRecommendations$.pipe(filter(result => result[0].recipientsUid >= 30))
  }

  async getCurrentUser() {
    this.currentUser = await this.auth.getUser();

  }
}
