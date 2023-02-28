import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { ConfigService } from './config.service';
import { StudentsComponent } from './students/students.component';
import { ClassesComponent } from './classes/classes.component';
import { RegisterclassComponent } from './registerclass/registerclass.component';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { StudentRouteService } from './studentRoute.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    StudentinfoComponent,
    StudentsComponent,
    ClassesComponent,
    RegisterclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ConfigService,
    LoginService,
    RegisterService,
    StudentRouteService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
