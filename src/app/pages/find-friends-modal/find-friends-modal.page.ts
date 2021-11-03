import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-find-friends-modal',
  templateUrl: './find-friends-modal.page.html',
  styleUrls: ['./find-friends-modal.page.scss'],
})
export class FindFriendsModalPage implements OnInit {

  @Input() allUsers$;
  retrievedAllUsers$;
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    this.retrievedAllUsers$ = this.allUsers$;
    console.log("This is the allUsers in the modal: ", this.retrievedAllUsers$)
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtrl.dismiss(closeModal);
  }


}
