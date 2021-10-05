import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from '../components/chat/chat.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then((m) => m.Tab2PageModule),

          },
          {
            path: 'movie-page',
            loadChildren: () =>
              import('../pages/movie-page/movie-page.module').then((m) => m.MoviePagePageModule)
          }
        ]
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab4/tab4.module').then((m) => m.Tab4PageModule),
          },
          {
            path: 'movie-page',
            loadChildren: () =>
              import('../pages/movie-page/movie-page.module').then((m) => m.MoviePagePageModule)
          },
          {
            path: 'connections',
            loadChildren: () => import('../pages/connections/connections.module').then(m => m.ConnectionsPageModule)
          },
          // {
          //   path: 'profile-page',
          //   loadChildren: () =>
          //     import('../pages/profile-page/profile-page.module').then((m) => m.ProfilePagePageModule)
          // }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
