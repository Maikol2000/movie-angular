import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserResponse } from 'src/app/models/news-result';

@Injectable({
  providedIn: 'root'
})
export class UserServeService {
  constructor(private http: HttpClient) {}

  userUrl = 'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01'

  // private data$!: BehaviorSubject<UserResponse>

  fetchUserApi() {
    return this.http.get<UserResponse>(this.userUrl)
  }

  // userPipe() {
  //   return this.fetchUserApi().pipe(tap(result => this.data$.next(result)))
  // }

  // get getDataUser(): Observable<UserResponse> {
  //   if (!this.data$) {
  //     this.data$ = new BehaviorSubject<UserResponse>({})
  //     this.userPipe().subscribe()
  //   }
  //   return this.data$.asObservable()
  // }
}
