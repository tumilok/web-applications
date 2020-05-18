import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-admin-course-item',
  templateUrl: './admin-course-item.component.html',
  styleUrls: ['./admin-course-item.component.css']
})
export class AdminCourseItemComponent implements OnInit {
  @Input() course: Course;
  @Output() delete = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.course);
  }
}