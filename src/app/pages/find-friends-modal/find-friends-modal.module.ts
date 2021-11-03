import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindFriendsModalPageRoutingModule } from './find-friends-modal-routing.module';

import { FindFriendsModalPage } from './find-friends-modal.page';
import { ComponentsModule } from '../../components/components.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindFriendsModalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FindFriendsModalPage]
})
export class FindFriendsModalPageModule { }
