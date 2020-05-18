import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { CoursesService } from 'src/app/services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-course-info',
  templateUrl: './admin-course-info.component.html',
  styleUrls: ['./admin-course-info.component.css']
})
export class AdminCourseInfoComponent implements OnInit {
  course: Course;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.pipe(map(params => params['id'])).subscribe(id => {
      this.course = this.coursesService.getCourse(id);
    });
  }

  onDelete(course: Course) {
    this.coursesService.deleteCourse(course);
  }
}