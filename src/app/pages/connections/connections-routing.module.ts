import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectionsPage } from './connections.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectionsPage
  },
  {
    path: 'profile-page',
    loadChildren: () => import('../profile-page/profile-page.module').then(m => m.ProfilePagePageModule)
  },
  {
    path: 'movie-page',
    loadChildren: () =>
      import('../../pages/movie-page/movie-page.module').then((m) => m.MoviePagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectionsPageRoutingModule { }
