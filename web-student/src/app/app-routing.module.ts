import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClassesComponent } from './classes/classes.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterclassComponent } from './registerclass/registerclass.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'studentinfo', component: StudentinfoComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'register-class', component: RegisterclassComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
