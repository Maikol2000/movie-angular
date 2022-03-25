import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../models/news-result';
import { NewsMovieService } from '../toheading/serve/news-movie.service';
import { UserServeService } from './serve/user-serve.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  users$ = new BehaviorSubject<User[]>([]);

  data = new Observable(function subscribe(observable) {
    observable.next
  })
  constructor(public service: UserServeService, public service2: NewsMovieService) {}

  ngOnInit(): void {
    this.service.fetchUserApi().pipe(map(resp => resp.content)).subscribe(
      users => this.users$.next(users || [])
    );
  }
}
