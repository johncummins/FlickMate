import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewModalPageRoutingModule } from './review-modal-routing.module';

import { ReviewModalPage } from './review-modal.page';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewModalPageRoutingModule,
    NgbModule

  ],
  declarations: [ReviewModalPage],
  bootstrap: [ReviewModalPage],

})
export class ReviewModalPageModule { }
