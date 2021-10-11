import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommendModalPageRoutingModule } from './recommend-modal-routing.module';

import { RecommendModalPage } from './recommend-modal.page';
import { ComponentsModule } from '../../components/components.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendModalPageRoutingModule,
    ComponentsModule,
    NgbModule
  ],
  declarations: [RecommendModalPage]
})
export class RecommendModalPageModule { }
