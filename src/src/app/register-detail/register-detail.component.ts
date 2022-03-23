import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { ListCourseApprovedResponse, UserDetail } from "../models/news-result";
import { RegisterDetailService } from "./service/register-detail.service";

@Component({
  selector: "app-register-detail",
  templateUrl: "./register-detail.component.html",
  styleUrls: ["./register-detail.component.scss"],
})
export class RegisterDetailComponent implements OnInit {
  users$ = new BehaviorSubject<UserDetail[]>([]);
  approvedCourses$ = new BehaviorSubject<ListCourseApprovedResponse[]>([])
  noneApprovedCourses$ = new BehaviorSubject<ListCourseApprovedResponse[]>([])
  waitingApprovedCourses$ = new BehaviorSubject<ListCourseApprovedResponse[]>([])

  constructor(
    public userService: RegisterDetailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.userService
      .fetchUserDetail(id)
      .subscribe((resp) => this.users$.next(resp));
    this.userService.fetchListCourseApproved(id).subscribe(resp => this.approvedCourses$.next(resp))
    this.userService.fetchCoursesNoneApproved(id).subscribe(resp => this.noneApprovedCourses$.next(resp))
    this.userService.fetchCourseWaitApproved(id).subscribe(resp => this.waitingApprovedCourses$.next(resp))
  }
}
