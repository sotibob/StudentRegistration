import { Component, OnInit } from '@angular/core';
import { Class } from '../class';
import { ConfigService } from '../config.service';
import { StudentRouteService } from '../studentRoute.service';

@Component({
  selector: 'app-registerclass',
  templateUrl: './registerclass.component.html',
  styleUrls: ['./registerclass.component.scss']
})
export class RegisterclassComponent implements OnInit{
  constructor(private stuRoute: StudentRouteService, private config: ConfigService){}

  classes = [] as Class[]

  ngOnInit(): void {
    this.stuRoute.changeData("MyInfo", "/studentinfo", "Logout", "/login");
    
    this.config.getClasses().subscribe(res => this.classes = res);
  }

  checkValue(event: any) {
    if(event.currentTarget.checked) {

    }
    else if(event.currentTarget.checked == false){

    }
  }

  addClasses() {
    
  }

}
