import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

import { Course } from '../../models/Course';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any;
  selected: Course;

  admin: boolean = false;

  constructor(
    private firestoreService: FirestoreService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isAdmin();
    this.getCourses();
  }

  private getCourses() {
    this.firestoreService.getCourses().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(courses => {
      this.courses = courses;
    });
  }

  public select(course: Course) {
    if (course == this.selected) {
      this.selected = null;
    }
    else {
      this.selected = course;
    }
  }

  signOut(){
    this.authService.signOut();
  }

  isAdmin() {
    this.admin = this.authService.isAdmin();
  }
}
