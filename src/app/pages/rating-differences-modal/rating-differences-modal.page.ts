import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rating-differences-modal',
  templateUrl: './rating-differences-modal.page.html',
  styleUrls: ['./rating-differences-modal.page.scss'],
})
export class RatingDifferencesModalPage implements OnInit {

  @Input() ratingDiff$;

  constructor(private modalCtr: ModalController) { }

  ngOnInit() {
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }

}
