import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { StudentRouteService } from '../studentRoute.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit{
  constructor(private adminRoutes: StudentRouteService, private router: Router, private http: HttpClient){}

  ngOnInit(): void {
    this.adminRoutes.changeData("Students", "/students", "Classes", "/classes")
  }

}
