import { Class } from "./class";

export interface Student {
    studentId: any,
    password: any,
    firstName: any,
    lastName: any,
    studentDOB: any,
    email: any,
    street: any,
    city: any,
    state: any,
    zip: any,
    classIds: number[];
}

export interface StudentWithClasses {
    student: Student,
    courses: Class[]
}