import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-recommend-user-card',
  templateUrl: './recommend-user-card.component.html',
  styleUrls: ['./recommend-user-card.component.scss'],
})
export class RecommendUserCardComponent implements OnInit {

  @Input() user;
  @Input() movieId;
  @Input() moviePoster;
  @Input() senderRating;
  @Input() inputtedMessage;
  isSent: boolean = false;

  constructor(public chatService: ChatService) { }

  ngOnInit() { }

  sendRecommendation(recipientUid) {
    console.log("This is the user in the sendRecommednation function: ", recipientUid)
    this.isSent = true;
    let chatID: Array<any> = []
    let chatID$ = this.chatService.getChatID(recipientUid);
    // console.log(chatID$)

    //Subsribing to the chatID observable to check if chat exists with this user already
    chatID$.subscribe(event => {
      chatID = event
      if (chatID.length > 0) {
        //send message using this chat ID
        this.chatService.sendRecommedation(chatID[0], this.movieId, this.moviePoster, this.senderRating, this.inputtedMessage);
      }
      else if (chatID.length == 0) {
        // create new chat
        let newChatPromise = this.chatService.create(recipientUid);
        newChatPromise.then((newChatId) => {
          this.chatService.sendRecommedation(newChatId, this.movieId, this.moviePoster, this.senderRating, this.inputtedMessage);
        })

      }
      else if (chatID == undefined) {
        console.log("error, ID udefined")
      }
    });

  }
}
