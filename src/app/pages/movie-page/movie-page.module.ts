import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviePagePageRoutingModule } from './movie-page-routing.module';

import { MoviePagePage } from './movie-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviePagePageRoutingModule
  ],
  declarations: [MoviePagePage]
})
export class MoviePagePageModule {}
