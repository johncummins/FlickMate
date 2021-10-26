import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: '/registration',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'verify-email',
    loadChildren: () =>
      import('./pages/verify-email/verify-email.module').then((m) => m.VerifyEmailPageModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./pages/registration/registration.module').then(
        (m) => m.RegistrationPageModule
      ),
  },
  {
    path: 'connections',
    loadChildren: () => import('./pages/connections/connections.module').then(m => m.ConnectionsPageModule)
  },
  {
    path: 'profile-page/:id',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then(m => m.ProfilePagePageModule)
  },
  {
    path: 'chats/:id', component: ChatComponent
  },
  {
    path: 'recommend-modal',
    loadChildren: () => import('./pages/recommend-modal/recommend-modal.module').then(m => m.RecommendModalPageModule)
  },
  {
    path: 'rate-back-modal',
    loadChildren: () => import('./pages/rate-back-modal/rate-back-modal.module').then(m => m.RateBackModalPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
