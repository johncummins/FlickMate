import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
// import { AuthenticationService } from '../shared/authentication-service';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  userChats$;
  chat$: Observable<any>;

  constructor(public chatsService: ChatService, public auth: AuthService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    // this.userChats$ = this.chatsService.getUserChats();

    // const chatId = this.route.snapshot.paramMap.get('id');
    // const source = this.chatsService.get(chatId);
    // this.chat$ = this.chatsService.joinUsers(source);
  }
}
