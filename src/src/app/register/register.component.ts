import { SlicePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, filter, map } from "rxjs";
import { Courses, ListUser } from "../models/news-result";
import { RegisterService } from "./service/service.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  listUser$ = new BehaviorSubject<ListUser[]>([]);
  courses$ = new BehaviorSubject<Courses[]>([]);
  constructor(public service: RegisterService) {}

  ngOnInit(): void {
    // this.service.fetchApi().subscribe((resp) => this.courses$.next(resp || []));
    this.service
      .fetchListUser()
      .subscribe((result) => this.listUser$.next(result || []));
    this.service
      .fetchCourses()
      .subscribe((resp) => this.courses$.next(resp || []));
  }
}
