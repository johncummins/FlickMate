import { NgModule } from '@angular/core';
import { UserProfileCardComponent } from './user-profile-card/user-profile-card.component'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [UserProfileCardComponent, UserProfileComponent],
  exports: [UserProfileCardComponent, UserProfileComponent],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ComponentsModule { }
