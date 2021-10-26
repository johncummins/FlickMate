import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateBackModalPageRoutingModule } from './rate-back-modal-routing.module';

import { RateBackModalPage } from './rate-back-modal.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RateBackModalPageRoutingModule,
    NgbModule
  ],
  declarations: [RateBackModalPage]
})
export class RateBackModalPageModule { }
