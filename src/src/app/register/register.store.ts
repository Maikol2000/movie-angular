import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  switchMap,
  tap,
} from "rxjs";
import { Courses, User } from "../models/news-result";
import { RegisterService } from "./service/register.service";

interface RegisterState {
  userList: User[];
  courses: Courses[];
}

@Injectable()
export class RegisterStore extends ComponentStore<RegisterState> {
  readonly userList$ = this.select((state) => state.userList);
  readonly courses$ = this.select((state) => state.courses);

  constructor(private registerService: RegisterService) {
    super({ userList: [], courses: [] });
  }

  readonly getUserList = this.effect(
    (searchKey$: Observable<string | null>) => {
      return searchKey$.pipe(
        //quan xat suw thay doi du lieu, sau khoan thoi gian
        debounceTime(300),
        // kiem tra su thay doi cua du lieu
        distinctUntilChanged(),
        //
        switchMap((key) => this.registerService.fetchUserList(key)),
        // doing act
        tap((userList) =>
          this.setState((state) => {
            return { ...state, userList };
          })
        )
      );
    }
  );

  // readonly getCourses = this.effect((courses$: Observable<string | null>) => {
  //   return 
  // });
}
