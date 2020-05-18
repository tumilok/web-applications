import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { FirestoreService } from 'src/app/services/firestore.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {
  courses: any[];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
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

  deleteCourse(course: Course) {
    this.firestoreService.deleteCourse(course);
  }
}
