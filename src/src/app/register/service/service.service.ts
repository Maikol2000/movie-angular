import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Courses, ListUser } from "src/app/models/news-result";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  urlListUser =
    "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01";
  urlCourses =
    "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01";

  constructor(private http: HttpClient) {}

  fetchListUser() {
    return this.http.get<ListUser[]>(this.urlListUser);
  }

  fetchCourses() {
    return this.http.get<Courses[]>(this.urlCourses);
  }
}
