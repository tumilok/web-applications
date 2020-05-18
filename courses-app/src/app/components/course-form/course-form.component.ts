import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  classFormats: string[] = [
    'Lecture',
    'Practice',
    'Laboratorium',
    'Project'
  ];

  myform: FormGroup;
  name: FormControl;
  ects: FormControl;
  semesterNumber: FormControl;
  classFormat: FormControl;
  maxStudents: FormControl;
  iconPath: FormControl;
  description: FormControl;

  constructor(
    private firestoreService: FirestoreService,
    private route: Router
    ) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.ects = new FormControl('', [
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)
    ]);
    this.semesterNumber = new FormControl('', [
      Validators.required,
      Validators.pattern(/^-?([1-9]\d*)?$/)
    ]);
    this.classFormat = new FormControl('', Validators.required);
    this.maxStudents = new FormControl('', [
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)
    ]);
    this.iconPath = new FormControl('');
    this.description = new FormControl('');
  }

  createForm() {
    this.myform = new FormGroup({
      name: this.name,
      ects: this.ects,
      semesterNumber: this.semesterNumber,
      classFormat: this.classFormat,
      maxStudents: this.maxStudents,
      iconPath: this.iconPath,
      description: this.description
    });
  }

  onSubmit() {
    if (this.myform.valid) {
      const name: string = this.myform.value.name;
      const ects: number = this.myform.value.ects;
      const semesterNumber: number = this.myform.value.semesterNumber;
      const classFormat: string = this.myform.value.classFormat;
      const maxStudents: number = this.myform.value.maxStudents;
      const iconPath: string = this.myform.value.iconPath;
      const description: string = this.myform.value.description;
      this.firestoreService.addCourse(name, ects, semesterNumber, 
        classFormat, maxStudents, iconPath, description);
      this.myform.reset();
      this.route.navigate(['/admin-courses']); 
    }
 }

}
