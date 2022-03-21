import { Component, OnInit } from '@angular/core';
import { NewsMovieService } from '../serve/news-movie.service';
import { UserServeService } from './serve/user-serve.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(public service: UserServeService, public service2: NewsMovieService) {}

  ngOnInit(): void {}
}
