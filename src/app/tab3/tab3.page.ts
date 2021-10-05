import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthenticationService } from '../shared/authentication-service';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  userChats$;

  constructor(public auth: AuthService, public cs: ChatService, public authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.userChats$ = this.cs.getUserChats();
  }
}
