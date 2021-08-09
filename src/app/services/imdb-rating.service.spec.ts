import { TestBed } from '@angular/core/testing';

import { IMDbRatingService } from './imdb-rating.service';

describe('IMDbRatingService', () => {
  let service: IMDbRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IMDbRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
