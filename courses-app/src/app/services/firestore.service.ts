import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Course } from '../models/Course';
import { Courses } from '../mock-courses';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private dbPath = '/courses';
  coursesRef: AngularFirestoreCollection<Course> = null;
  courses: Course[];

  constructor(private db: AngularFirestore) {
     this.coursesRef = db.collection(this.dbPath);
     this.getCourses().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(courses => {
      this.courses = courses;
    });
 }

  initDb() {
    for (let courseInfo of Courses) {
      this.createCourse(new Course(courseInfo));
    }
  }

  generateId(): number {
    if (this.courses.length == 0) {
      return 1;
    }
    var id = 0;
    if (this.courses[id] != null) {
      for (let item of this.courses) {
        if(id < +item.id) {
          id = +item.id;
        }
      }
      return id + 1;
    }
  }

  addCourse(name:string, ects:number, semesterNumber:number, 
    classFormat:string, maxStudents, iconPath:string, description:string) {
      
      if (iconPath === '' || iconPath === null) {
        iconPath = 'assets/img/noImage.jpg'
      }

      const course: Course = {
        id : (this.generateId().toString()),
        name,
        ects,
        semesterNumber,
        classFormat,
        maxStudents,
        score : 0,
        iconPath,
        description
      };
      this.createCourse(course);
  }

  createCourse(course: Course): void {
    this.coursesRef.doc(course.id).set({...course});
  }

  getCourses(): AngularFirestoreCollection<Course> {
    return this.coursesRef;
  }

  updateCourse(course: Course): Promise<void> {
    delete course.id;
    return this.coursesRef.doc('courses/' + course.id).update(course);
  }

  deleteCourse(course: Course) {
    this.coursesRef.doc(course.id).delete();
  }
}
