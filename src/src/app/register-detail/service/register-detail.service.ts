import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  ListCourseApprovedResponse,
  UserDetail,
} from "src/app/models/news-result";

@Injectable({
  providedIn: "root",
})
export class RegisterDetailService {
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMDAwMDAyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE2NDc4NDMzODcsImV4cCI6MTY0Nzg0Njk4N30.og4BMY2XVGGZ6wURxVYZ3jF18QT3HkH5fgNl6js3tM8";
  urlUserDetail =
    "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=";
  urlListCourseApproved =
    "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet";
  urlCoursesNoneApproved =
    "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=";
  urlCourseWaitApproved =
    "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet";
  fetchUserDetail(taiKhoan: string | null) {
    return this.http.get<UserDetail[]>(this.urlUserDetail + taiKhoan);
  }

  headers = new HttpHeaders({ Authorization: "Bearer " + this.token });

  fetchListCourseApproved(taiKhoan: string | null) {
    return this.http.post<ListCourseApprovedResponse[]>(
      this.urlListCourseApproved,
      { taiKhoan },
      { headers: this.headers }
    );
  }

  fetchCoursesNoneApproved(taiKhoan: string | null) {
    return this.http.post<ListCourseApprovedResponse[]>(
      this.urlCoursesNoneApproved + taiKhoan,
      taiKhoan,
      { headers: this.headers }
    );
  }

  fetchCourseWaitApproved(taiKhoan: string | null) {
    return this.http.post<ListCourseApprovedResponse[]>(
      this.urlCourseWaitApproved,
      {taiKhoan},
      {headers:this.headers}
    );
  }

  constructor(private http: HttpClient) {}
}
