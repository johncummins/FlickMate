import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviePagePage } from './movie-page.page';

const routes: Routes = [
  {
    path: '',
    component: MoviePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviePagePageRoutingModule {}
