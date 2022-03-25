import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap, Observable } from 'rxjs';
import { UserResponse } from '../../models/news-result';

@Injectable({
  providedIn: 'root',
})
export class ServeUserService {
  constructor(private http: HttpClient) {}

  userApiUrl =
    'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01';

  private dataUser$!: BehaviorSubject<UserResponse>;

  fetchUsers() {
    return this.http.get<UserResponse>(this.userApiUrl);
  }

  getDataUser() {
    return this.fetchUsers().pipe(
      tap((result) => {
        this.dataUser$.next(result);
      })
    );
  }

  get userData(): Observable<UserResponse> {
    if (!this.dataUser$) {
      this.loadData();
    }
    return this.dataUser$.asObservable();
  }

  private loadData() {
    this.dataUser$ = new BehaviorSubject<UserResponse>({});
    this.getDataUser().subscribe();
  }
}
