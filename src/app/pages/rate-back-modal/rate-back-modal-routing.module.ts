import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RateBackModalPage } from './rate-back-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RateBackModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateBackModalPageRoutingModule {}
