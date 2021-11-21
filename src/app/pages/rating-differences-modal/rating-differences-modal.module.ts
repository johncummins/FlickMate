import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingDifferencesModalPageRoutingModule } from './rating-differences-modal-routing.module';

import { RatingDifferencesModalPage } from './rating-differences-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingDifferencesModalPageRoutingModule
  ],
  declarations: [RatingDifferencesModalPage]
})
export class RatingDifferencesModalPageModule {}
