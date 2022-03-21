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
  maPhim?: number;
  moTa?: string;
  ngayKhoiChieu?: string;
  sapChieu?: boolean;
  tenPhim?: string;
  trailer?: string;
}

export interface UserResponse {
  content?: Users[];
}

export interface Users {
  taiKhoan?: string
}
