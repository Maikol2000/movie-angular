import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Courses, User } from "src/app/models/news-result";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  urlCourses =
    "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01";

  constructor(private http: HttpClient) {}

  fetchUserList(value: string | null) {
    let url =
      "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01";
    if (value) url += `&tuKhoa=${value}`;

    return this.http.get<User[]>(url);
  }

  fetchCourses() {
    return this.http.get<Courses[]>(this.urlCourses);
  }
}
