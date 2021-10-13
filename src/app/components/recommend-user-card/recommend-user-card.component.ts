import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-recommend-user-card',
  templateUrl: './recommend-user-card.component.html',
  styleUrls: ['./recommend-user-card.component.scss'],
})
export class RecommendUserCardComponent implements OnInit {

  @Input() user;        // a user who can be followed
  @Input() movieId;        // a user who can be followed
  @Input() moviePoster;        // a user who can be followed
  @Input() selectedRating;        // a user who can be followed
  @Input() inputtedMessage;        // a user who can be followed
  isSent: boolean = false;

  constructor(public chatService: ChatService) { }

  ngOnInit() { }

  sendRecommendation(recipientUid) {
    this.isSent = true;
    let chatID: Array<any>;
    let chatID$ = this.chatService.getChatID(recipientUid);

    //Subsribing to the chatID observable to check if chat exists with this user already
    chatID$.subscribe(event => {
      chatID = event
      if (chatID.length > 0) {
        //send message using this chat ID
        this.chatService.sendMessage(chatID[0], this.movieId, this.moviePoster, this.selectedRating, this.inputtedMessage);
      }
      else if (chatID.length == 0) {
        // create new chat
        let newChatPromise = this.chatService.create(recipientUid);
        newChatPromise.then((newChatId) => {
          this.chatService.sendMessage(newChatId, this.movieId, this.moviePoster, this.selectedRating, this.inputtedMessage);
        })

      }
      else if (chatID == undefined) {
        console.log("error, ID udefined")
      }
    });

  }
}
