import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class LoginService {
  private data = new BehaviorSubject('default data');
  data$ = this.data.asObservable();

  changeData(data: string) {
    this.data.next(data)
  }
}