import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualSignUpModalPage } from './manual-sign-up-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ManualSignUpModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualSignUpModalPageRoutingModule {}
