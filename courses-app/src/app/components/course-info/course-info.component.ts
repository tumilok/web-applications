import { Component, OnInit, Input } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/models/Course';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  course: Course;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
    ) { }

  ngOnInit() {
    this.route.params.pipe(map(params => params['id'])).subscribe(id => {
      this.course = this.coursesService.getCourse(id);
    });
  }
}

