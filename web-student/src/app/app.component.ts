import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { StudentRouteService } from './studentRoute.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private modalService: NgbModal, private router: Router, private routes: StudentRouteService, private loginService: LoginService, private registerService: RegisterService){}

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  button1 = "";
  button2 = "";
  btn1Route = "";
  btn2Route = "";
  firstBtn() {
    this.router.navigateByUrl(this.btn1Route);
  }

  secondBtn() {
    this.router.navigateByUrl(this.btn2Route);
    if(this.button2 == "Logout") {
      this.loginService.changeData("");
      this.registerService.changeData("");
    }
  }

  ngOnInit(): void {
    this.router.navigateByUrl("/register");
    this.routes.changeData("Register", "/register", "Admin", "/admin")
    this.routes.btn1$.subscribe(res => this.button1 = res);
    this.routes.btn2$.subscribe(res => this.button2 = res);
    this.routes.btn1Route$.subscribe(res => this.btn1Route = res);
    this.routes.btn2Route$.subscribe(res => this.btn2Route = res);
  }
}
