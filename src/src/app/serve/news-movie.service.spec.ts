import { TestBed } from '@angular/core/testing';

import { NewsMovieService } from './news-movie.service';

describe('NewsMovieService', () => {
  let service: NewsMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
