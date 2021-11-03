import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-rate-back-modal',
  templateUrl: './rate-back-modal.page.html',
  styleUrls: ['./rate-back-modal.page.scss'],
})
export class RateBackModalPage implements OnInit {

  selectedRating = 0;
  readonly = false;

  @Input() senderUid: string = '';
  @Input() coreMovieDetails;
  @Input() senderRating: number;


  constructor(
    public modalCtr: ModalController, public cs: ChatService,

  ) { }

  ngOnInit() {
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }

  submitRateBack() {
    console.log("THis is hte submist rate back button: ", this.selectedRating, "Movei ID: ", this.coreMovieDetails.movieID)
    this.cs.addRateBack(this.senderUid, this.coreMovieDetails, this.senderRating, this.selectedRating);
    console.log("This is the coreMovie Detials after rate back pressed: ", this.coreMovieDetails);
    close();

  }

}
