import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CoursesService } from './services/courses.service';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { FilterPipe } from './filters/filter.pipe';
import { FilterByEctsPipe } from './filters/filter-by-ects.pipe';
import { FilterBySemesterPipe } from './filters/filter-by-semester.pipe';
import { FilterByRatingPipe } from './filters/filter-by-rating.pipe';
import { CourseRateComponent } from './components/course-rate/course-rate.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { AdminCoursesComponent } from './components/admin/admin-courses/admin-courses.component';
import { AdminCourseInfoComponent } from './components/admin/admin-course-info/admin-course-info.component';
import { AdminCourseItemComponent } from './components/admin/admin-course-item/admin-course-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseItemComponent,
    CourseFormComponent,
    FilterPipe,
    FilterByEctsPipe,
    FilterBySemesterPipe,
    FilterByRatingPipe,
    CourseRateComponent,
    CourseInfoComponent,
    LoginComponent,
    RegisterComponent,
    AdminCoursesComponent,
    AdminCourseInfoComponent,
    AdminCourseItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
