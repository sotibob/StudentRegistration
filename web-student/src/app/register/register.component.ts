import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { config } from 'rxjs';
import { ConfigService } from '../config.service';
import { Student } from '../student';
import { StudentRouteService } from '../studentRoute.service';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  constructor(private service: RegisterService, private config: ConfigService, private router: Router, private routes: StudentRouteService){}
  registrationForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    studentDOB: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
  });

  get firstName() {return this.registrationForm.get("firstName")}
  get lastName() {return this.registrationForm.get("lastName")}
  get email() {return this.registrationForm.get("email")}
  get studentDOB() {return this.registrationForm.get("studentDOB")}
  get password() {return this.registrationForm.get("password")}

  student = {} as Student
  error = ""
  public validateInfo(){
    if(this.email?.valid && this.password?.valid && this.firstName?.valid && this.lastName?.valid && this.studentDOB?.valid) {
      this.config.addStudent(this.registrationForm as unknown as Student);
      this.service.changeData(this.email as any);
      this.router.navigateByUrl("/studentinfo");
    }
    else {
      this.error = "Please complete all the required fields!"
    }
  }

  ngOnInit(): void {
    this.routes.changeData("Register", "/register", "Admin", "/admin")
  }

}
