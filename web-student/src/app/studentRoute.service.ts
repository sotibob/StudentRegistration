import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class StudentRouteService {
  private btn1 = new BehaviorSubject('default data');
  private btn2 = new BehaviorSubject('default data');
  private btn1Route = new BehaviorSubject('default data');
  private btn2Route = new BehaviorSubject('default data');
  btn1$ = this.btn1.asObservable();
  btn2$ = this.btn2.asObservable();
  btn1Route$ = this.btn1Route.asObservable();
  btn2Route$ = this.btn2Route.asObservable();

  changeData(btn1: string, btn1Route: string, btn2: string, btn2Route: string) {
    this.btn1.next(btn1);
    this.btn2.next(btn2);
    this.btn1Route.next(btn1Route);
    this.btn2Route.next(btn2Route);
  }
}