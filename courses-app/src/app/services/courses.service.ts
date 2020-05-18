import { Injectable } from '@angular/core';
import { Courses } from '../mock-courses';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course[] = Courses;
  idGenerator: number = this.courses.length + 1;

  constructor() { }

  getCourses(){
    return this.courses;
  }

  getCourse(id: string) {
      return this.courses.filter(c => c.id === id)[0];
  }

  addCourse(name:string, ects:number, semesterNumber:number, 
    classFormat:string, maxStudents, iconPath:string, description:string) {
      
      if (iconPath === '' || iconPath === null) {
        iconPath = 'assets/img/noImage.jpg'
      }

      const course: Course = {
        id : (this.idGenerator++).toString(),
        name,
        ects,
        semesterNumber,
        classFormat,
        maxStudents,
        score : 0,
        iconPath,
        description
      };
      this.courses.push(course);
  }

  deleteCourse(course: Course) {
    let index = this.courses.indexOf(course);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }
}