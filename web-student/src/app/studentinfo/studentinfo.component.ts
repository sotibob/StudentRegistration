import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from '../class';
import { ConfigService } from '../config.service';
import { LoginService } from '../login/login.service';
import { RegisterService } from '../register/register.service';
import { Student } from '../student';
import { StudentRouteService } from '../studentRoute.service';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.scss']
})
export class StudentinfoComponent implements OnInit{
  constructor(private config : ConfigService, private serviceRegister: RegisterService, private serviceLogin: LoginService, private stuRoute: StudentRouteService, private router: Router){}

  val1: any
  val2: any
  student = {}
  classes = [] as Class[]

  public ngOnInit(): void {
    this.stuRoute.changeData("MyInfo", "/studentinfo", "Logout", "/login")
    
    this.serviceLogin.data$.subscribe(res => this.val2 = res);
    this.serviceRegister.data$.subscribe(res => this.val1 = res);
    if(this.val1 != null) {
      this.config.getStudent(this.val1)
      this.config.getClasses()
    }
    else {
      this.config.getStudent(this.val2)
      this.config.getClasses()
    }
  }

  regClass() {
    this.router.navigateByUrl("/register-class");
  }

}
