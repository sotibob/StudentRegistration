import { Component, OnInit } from '@angular/core';
import { StudentRouteService } from '../studentRoute.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit{
  constructor(private routes: StudentRouteService) {}

  ngOnInit(): void {
    this.routes.changeData("Students", "/students", "Classes", "/classes");
  }

}
