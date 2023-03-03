import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Class } from '../class';
import { ConfigService } from '../config.service';
import { StudentRouteService } from '../studentRoute.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit{
  constructor(private routes: StudentRouteService, private config: ConfigService) {}

  classes = [] as Class[]
  info = "";
  ngOnInit(): void {
    this.routes.changeData("Students", "/students", "Classes", "/classes");
    this.config.getClasses().subscribe(res => this.classes = res);
  }

  crudForm = new FormGroup({
    classId: new FormControl(''),
    className: new FormControl(''),
    creditHours: new FormControl(''),
    dateTime: new FormControl(''),
    classProfessor: new FormControl(''),
    classLocation: new FormControl(''),
  });

  get classId() {
    return this.crudForm.get("classId");
  }

  addClass() {
    this.config.addClass(this.crudForm as unknown as Class);
    this.ngOnInit();
  }

  editClass(){
    this.config.editClass(this.crudForm as unknown as Class, this.classId);
    this.ngOnInit();
  }

  deleteClass() {
    this.config.deleteClass(this.classId)
    this.ngOnInit();
  }

  crud(event: any) {
    if(event.currentTarget.id == "add" ) {
      this.info = `<form [formGroup]="crudForm" (ngSubmit)="addClass()">
                        <label for="className">Class Name  </label>
                        <input type="text" id="className"><br>
                        <label for="creditHours">Credit Hours  </label>
                        <input type="text" id="creditHours"><br>
                        <label for="dateTime">Date/Time  </label>
                        <input type="text" id="dateTime"><br>
                        <label for="classProfessor">Professor  </label>
                        <input type="text" id="classProfessor"><br>
                        <label for="classLocation">Location  </label>
                        <input type="date" id="classLocation"><br>
                        <button type="submit">Add</button>
                    </form>`
    }
    else if(event.currentTarget.id == "edit") {
      this.info = `<form [formGroup]="crudForm" (ngSubmit)="editClass()">
                      <label for="classId">Class ID  </label>
                      <input type="text" id="classId"><br>
                      <label for="className">Class Name  </label>
                      <input type="text" id="className"><br>
                      <label for="creditHours">Credit Hours  </label>
                      <input type="text" id="creditHours"><br>
                      <label for="dateTime">Date/Time  </label>
                      <input type="text" id="dateTime"><br>
                      <label for="classProfessor">Professor  </label>
                      <input type="text" id="classProfessor"><br>
                      <label for="classLocation">Location  </label>
                      <input type="date" id="classLocation"><br>
                      <button type="submit">Edit</button>
                  </form>`
    }
    else if (event.currentTarget.id == "delete") {
      this.info = `<form [formGroup]="crudForm" (ngSubmit)="deleteClass()">
                      <label for="classId">Class ID  </label>
                      <input type="text" id="classId"><br>
                      <button type="submit">Delete</button>
                  </form>`
    }
  }

}
 