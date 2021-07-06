import { Component, OnInit } from '@angular/core';
import { ReadMovieService } from '../services/read-movie.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  searchResults: any;

  constructor(private readmovieservice: ReadMovieService) {}

  ngOnInit() {}
}
