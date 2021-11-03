import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindFriendsModalPage } from './find-friends-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FindFriendsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindFriendsModalPageRoutingModule {}
