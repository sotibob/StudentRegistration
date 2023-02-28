import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ConfigService } from '../config.service';
import { StudentRouteService } from '../studentRoute.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  constructor(private config: ConfigService, private router: Router, private routes: StudentRouteService){}

  adminLoginForm = new FormGroup({
    id: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  get id(){
    return this.adminLoginForm.get("id")
  }

  get password() {
    return this.adminLoginForm.get("password")
  }

  error = ""
  public validateAdmin(){
    if(this.id?.valid && this.password?.valid) {
      if(this.id?.value == "Admin" as any && this.password?.value == "1234" as any) {
        this.router.navigateByUrl("/students");
      }
      else {
        this.error = "Invalid Password or Email! Id is case sensitive."
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
