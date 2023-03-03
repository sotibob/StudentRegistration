import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { ConfigService } from '../config.service';
import { Student, StudentWithClasses } from '../student';
import { StudentRouteService } from '../studentRoute.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit{
  constructor(private adminRoutes: StudentRouteService, private router: Router, private http: HttpClient, private config: ConfigService){}

  data = [] as StudentWithClasses[]
  
  students = [] as Student[]
  info = ""
  ngOnInit(): void {
    this.adminRoutes.changeData("Students", "/students", "Classes", "/classes")
    this.config.getStudents().subscribe(res => this.data = res);
    for(var i = 0; i < this.data.length; i++ ) {
      this.students[i] = this.data[i].student;
    }
    
  }

  crudForm = new FormGroup({
    studentId: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    studentDOB: new FormControl(''),
    password: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
  });

  get studentId() {
    return this.crudForm.get("studentId");
  }

  addStudent() {
    this.config.addStudent(this.crudForm as unknown as Student);
    this.ngOnInit();
  }

  editStudent(){
    this.config.editStudent(this.crudForm as unknown as Student, this.studentId);
    this.ngOnInit();
  }

  deleteStudent() {
    this.config.deleteStudent(this.studentId);
    this.ngOnInit();
  }

  crud(event: any) {
    if(event.currentTarget.id == "add" ) {
      this.info = `<form [formGroup]="crudForm" (ngSubmit)="addStudent()">
                        <label for="firstName">First Name  </label>
                        <input type="text" id="firstName"><br>
                        <label for="lastName">Last Name  </label>
                        <input type="text" id="lastName"><br>
                        <label for="email">Email  </label>
                        <input type="text" id="email"><br>
                        <label for="password">New Password  </label>
                        <input type="text" id="password"><br>
                        <label for="studentDOB">Date of Birth  </label>
                        <input type="date" id="studentDOB"><br>
                        <label for="street">Address  </label>
                        <input type="text" id="street"><br>
                        <label for="city">City  </label>
                        <input type="text" id="city"><br>
                        <label for="state">State  </label>
                        <input type="text" id="state"><br>
                        <label for="zip">ZIP  </label>
                        <input type="text" id="zip"><br>
                        <button type="submit">Add</button>
                    </form>`
    }
    else if(event.currentTarget.id == "edit") {
      this.info = `<form [formGroup]="crudForm" (ngSubmit)="editStudent()">
                      <label for="studentId">Student ID  </label>
                      <input type="text" id="studentId"><br>
                      <label for="firstName">First Name  </label>
                      <input type="text" id="firstName"><br>
                      <label for="lastName">Last Name<  /label>
                      <input type="text" id="lastName"><br>
                      <label for="email">Email  </label>
                      <input type="text" id="email"><br>
                      <label for="password">New Password  </label>
                      <input type="text" id="password"><br>
                      <label for="studentDOB">Date of Birth  </label>
                      <input type="date" id="studentDOB"><br>
                      <label for="street">Address  </label>
                      <input type="text" id="street"><br>
                      <label for="city">City  </label>
                      <input type="text" id="city"><br>
                      <label for="state">State  </label>
                      <input type="text" id="state"><br>
                      <label for="zip">ZIP  </label>
                      <input type="text" id="zip"><br>
                      <button type="submit">Edit</button>
                  </form>`
    }
    else if (event.currentTarget.id == "delete") {
      this.info = `<form [formGroup]="crudForm" (ngSubmit)="deleteStudent()">
                      <label for="studentId">Student ID  </label>
                      <input type="text" id="studentId"><br>
                      <button type="submit">Delete</button>
                  </form>`
    }
  }

}
