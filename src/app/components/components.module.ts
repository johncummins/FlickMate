import { NgModule } from '@angular/core';
import { UserProfileCardComponent } from './user-profile-card/user-profile-card.component'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { ChatComponent } from './chat/chat.component'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecommendUserCardComponent } from './recommend-user-card/recommend-user-card.component'




@NgModule({
  declarations: [UserProfileCardComponent, UserProfileComponent, ChatComponent, RecommendUserCardComponent],
  exports: [UserProfileCardComponent, UserProfileComponent, ChatComponent, RecommendUserCardComponent],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ComponentsModule { }
