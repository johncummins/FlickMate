import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-recommend-modal',
  templateUrl: './recommend-modal.page.html',
  styleUrls: ['./recommend-modal.page.scss'],
})
export class RecommendModalPage implements OnInit {

  @Input() movieToReviewID: string = '';
  @Input() movieToReviewTitle: string = '';
  @Input() movieToReviewPoster: string = '';
  inUserFollowingArrObj: any;
  inUserFollowersArrObj: any;
  selected = 0;
  hovered = 0;
  readonly = false;
  constructor(private modalCtr: ModalController
  ) { }

  ngOnInit() {
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }

}
