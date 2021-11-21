import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatingDifferencesModalPage } from './rating-differences-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RatingDifferencesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingDifferencesModalPageRoutingModule {}
