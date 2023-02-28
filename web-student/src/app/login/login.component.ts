import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';
import { Student } from '../student';
import { StudentRouteService } from '../studentRoute.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private service: LoginService, private config: ConfigService, private router: Router, private routes: StudentRouteService){}

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  get email() {
    return this.loginForm.get("email")
  }

  get password() {
    return this.loginForm.get("password")
  }
  student = {} as Student;
  error = ""
  public validate(){
    if(this.email?.valid && this.password?.valid) {
      this.config.getStudent(this.email as any).subscribe(resp => {
        this.student.email = resp.student.email;
        this.student.password = resp.student.password;
      });
      if(this.student?.email == this.email.value && this.student?.password == this.password.value) {
        this.service.changeData(this.email as any);
        this.router.navigateByUrl("/studentinfo")
      }
      else {
        this.error = "Invalid Password or Email!"
      }
    }
    else {
      this.error = "Please complete all the required fields!"
    }

  }

  ngOnInit(): void {
    this.routes.changeData("Register", "/register", "Admin", "/admin")
  }

}
