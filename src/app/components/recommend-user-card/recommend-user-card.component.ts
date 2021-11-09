import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-recommend-user-card',
  templateUrl: './recommend-user-card.component.html',
  styleUrls: ['./recommend-user-card.component.scss'],
})
export class RecommendUserCardComponent implements OnInit {

  @Input() user;
  @Input() coreMovieDetails;
  @Input() senderRating;
  @Input() inputtedMessage;
  isSent: boolean = false;
  chatID$;
  chatSub;
  sentRecommendations$;


  constructor(public chatService: ChatService) { }

  ngOnInit() { }

  getRecommendation(recipientUid) {
    console.log("This is the user in the sendRecommednation function: ", recipientUid)
    this.isSent = true;
    this.chatID$ = this.chatService.getChatID(recipientUid)

    //Subsribing to the chatID observable to check if chat exists with this user already
    this.chatSub = this.chatID$.subscribe((chatID: Array<any>) => {
      this.sendRecommendation(chatID, recipientUid)

    });
  }

  sendRecommendation(chatID: Array<any>, recipientUid) {
    if (chatID == undefined) {
      console.log("error, ID udefined")
    }

    else if (chatID.length == 0 && this.senderRating !== 0) {
      // create new chat
      let newChatPromise = this.chatService.create(recipientUid);
      newChatPromise.then((newChatId) => {
        this.chatService.sendRecommedation(newChatId, this.coreMovieDetails, this.senderRating, this.inputtedMessage);
      })
    }

    else if (chatID.length > 0 && this.senderRating !== 0) {
      this.checkIfSent(chatID[0], this.coreMovieDetails.movieID);
    }

    else if (this.senderRating == 0) {
      this.isSent = false;
      return alert('You must add a rating for this movie before sending it as recommendation');
    }
  }

  async checkIfSent(chatID, movieID) {
    let moviesRecommendedArr = [];
    this.sentRecommendations$ = this.chatService.get(chatID).toPromise().then((result) => {
      moviesRecommendedArr = result.moviesRecommended;
      console.log("THis is the movieRecommendedarray: ", moviesRecommendedArr);
      console.log("THis is the movieID to reommend: ", movieID);
      this.update(chatID, moviesRecommendedArr, movieID);
    })
  }

  // either sends the recommendation to the user or else an alert is displayed
  update(chatID, moviesRecommendedArr, movieID,) {
    if (moviesRecommendedArr.includes(movieID)) {
      this.isSent = false;
      console.log("This function is returnung false(movieID is present in the array££££££££)");
      // this.sentRecommendations$.unsubscribe;
      return alert('You have already sent this recommendation to this person');
      // return false
    }
    else {
      console.log("This function is returnung true(movieID is not present in the array#########)");
      this.chatService.sendRecommedation(chatID, this.coreMovieDetails, this.senderRating, this.inputtedMessage);
      console.log("movie rec sent:")
      // this.sentRecommendations$.unsubscribe;
      // return true
    }
  }

  ngOnDestroy() {
    // this.chatID$.unsubscribe;
    // this.chatSub.unsubscribe;
  }



}
