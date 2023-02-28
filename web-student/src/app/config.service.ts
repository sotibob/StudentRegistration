import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Student, StudentWithClasses } from './student';
import { Class } from './class';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  studentUrl = "http/localhost:9000/students/";
  classUrl = "http/localhost:9100/courses/";

  public getStudent(email: string) {
    return this.http.get<StudentWithClasses>(this.studentUrl + email);
  }

  public getStudents() {
    return this.http.get<StudentWithClasses>(this.studentUrl);
  }

  public addStudent(stu: Student) {
    stu.classIds = [];
    return this.http.post<Student>(this.studentUrl + "add", stu).pipe();
  }

  public editStudent(stu: Student, id: string) {
    return this.http.put<Student>(this.studentUrl + "update/" + id, stu).pipe;
  }

  public deleteStudent(id: string) {
    this.http.delete(this.studentUrl + "delete/" + id);
  }

  public getClasses() {
    return this.http.get(this.classUrl);
  }

  public getClass(id: any) {
    return this.http.get<Class>(this.classUrl + id);
  }

  public addClass(cla: Class) {
    return this.http.post<Class>(this.classUrl + "add", cla).pipe();
  }

  public editClass(cla: Class, id: any) {
    return this.http.put<Class>(this.classUrl + "update/" + id, cla).pipe;
  }

  public deleteClass(id: any) {
    this.http.delete(this.classUrl + "delete/" + id);
  }
}