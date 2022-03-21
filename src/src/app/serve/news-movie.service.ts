import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { MovieListResponse } from '../models/news-result';

@Injectable({
  providedIn: 'root',
})
export class NewsMovieService {
  constructor(private http: HttpClient) {}

  moviesApiUrl =
    'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01';

  private data$!: BehaviorSubject<MovieListResponse>;

  fetchMovies(filmName?: string) {
    if (filmName) this.moviesApiUrl += '&tenPhim=' + filmName;
    return this.http.get<MovieListResponse>(this.moviesApiUrl);
  }

  getDataStore() {
    return this.fetchMovies().pipe(
      tap((data) => {
        //next dùng để đưa dữ liệu mới và thay thế dữ liệu cũ
        this.data$.next(data);
      })
    );
  }

  get movieData(): Observable<MovieListResponse> {
    // chạy khi this.data$ là null
    if (!this.data$) {
      this.loadData()
    }
    return this.data$.asObservable();
  }

  // chạy lần đầu để tạo vùng nhớ của data đưa về
  private loadData() {
    this.data$ = new BehaviorSubject<MovieListResponse>({})
    this.getDataStore().subscribe()
  }

}
