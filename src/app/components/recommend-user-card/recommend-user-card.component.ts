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

  constructor(public chatService: ChatService) { }

  ngOnInit() { }

  sendRecommendation(recipientUid) {
    console.log("This is the user in the sendRecommednation function: ", recipientUid)
    this.isSent = true;
    let chatID: Array<any> = []
    this.chatID$ = this.chatService.getChatID(recipientUid);

    // console.log(chatID$)

    //Subsribing to the chatID observable to check if chat exists with this user already
    this.chatSub = this.chatID$.subscribe(event => {
      chatID = event
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
        var returnedRes: boolean = this.checkIfSent(chatID[0], this.coreMovieDetails.movieID);
        //check if the movie has been sent already or not
        if (returnedRes == true) {
          //send message using this chat ID
          this.chatService.sendRecommedation(chatID[0], this.coreMovieDetails, this.senderRating, this.inputtedMessage);
          console.log("movie rec sent:")
        }
        else {
          this.isSent = false;
          return alert('You have already sent this recommendation to this person');
        }
      }
      else if (this.senderRating == 0) {
        this.isSent = false;
        return alert('You must add a rating for this movie before sending it as recommendation');
      }

    });
  }

  checkIfSent(chatID, movieID) {

    let sentRecommendations$
    let moviesRecommendedArr = [];
    let returnedRes: boolean;

    sentRecommendations$ = this.chatService.get(chatID)
    sentRecommendations$.subscribe((result) => {
      console.log("THis is the result from the sent recommendations subscription: ", result)
      moviesRecommendedArr = result.moviesRecommended;
      console.log("THis is the movieRecommendedarray: ", moviesRecommendedArr);
      console.log("THis is the movieID to reommend: ", movieID);

      var returnedRes = this.update(moviesRecommendedArr, movieID);
      console.log("THis is the retunred REs: ", returnedRes)
    })
    return returnedRes


  }

  update(moviesRecommendedArr, movieID) {
    if (moviesRecommendedArr.includes(movieID)) {
      console.log("This function is returnung false(movieID is present in the array££££££££)");
      return false
    }
    else {
      console.log("This function is returnung true(movieID is not present in the array#########)");
      return true
    }
  }

  ngOnDestroy() {
    // this.chatID$.unsubscribe;
    this.chatSub.unsubscribe;
  }



}
