import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/news-result';
import { NewsMovieService } from '../serve/news-movie.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-toheading',
  templateUrl: './toheading.component.html',
  styleUrls: ['./toheading.component.scss'],
})
export class ToheadingComponent implements OnInit {
  constructor(private services: NewsMovieService) {}

  contents = this.services.movieData;

  ngOnInit(): void {}
}
