import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  userChats$;


  constructor(public chatsService: ChatService, public auth: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.userChats$ = this.chatsService.getUserChats();
    console.log("This is hte userchat in the tab1: ", this.userChats$)

  }
}
