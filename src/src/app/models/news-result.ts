export interface MovieListResponse {
  content?: Movie[];
  dateTime?: string;
  message?: string;
  statusCode?: number;
  messageConstants?: string;
}

export interface Movie {
  biDanh?: string;
  dangChieu?: boolean;
  danhGia?: number;
  hinhAnh?: string;
  hot?: boolean;
  maNhom?: string;
  maPhim: number;
  moTa?: string;
  ngayKhoiChieu?: string;
  sapChieu?: boolean;
  tenPhim?: string;
  trailer?: string;
}

export interface UserResponse {
  content?: User[];
}

export interface User {
  taiKhoan?: string;
}

export interface RegisterSubject {
  taiKhoan?: string;
  biDanh?: string;
  hoTen?: string;
}
export interface User {
  taiKhoan?: string;
  hoTen?: string;
  email?: string;
  soDt?: string;
}

export interface Courses {
  maKhoaHoc?: string;
  tenKhoaHoc?: string;
  hinhAnh?: string;
}

export interface UserDetail {
  taiKhoan?: string;
  hoTen?: string;
}

export interface RegisterDetail {
  maKhoaHoc?: string;
  taiKhoan?: string;
}

export interface ListCourseApprovedResponse {
  maKhoaHoc?: string
  tenKhoaHoc?: string
}

export interface MovieItem {
  name: string
  phone: string
}