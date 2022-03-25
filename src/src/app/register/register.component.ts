import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Courses } from "../models/news-result";
import { RegisterStore } from "./register.store";
import { RegisterService } from "./service/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  userList$ = this.registerStore.userList$;
  courses$ = new BehaviorSubject<Courses[]>([]);

  constructor(
    public service: RegisterService,
    private registerStore: RegisterStore
  ) {
    this.searchUser(null);
  }

  searchUser(target: EventTarget | null) {
    if (target) {
      let value = (target as HTMLInputElement).value;
      return this.registerStore.getUserList(value);
    }
    return this.registerStore.getUserList(null);
  }

  ngOnInit(): void {}
  // store.addUser()
}
