import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { AdminCoursesComponent } from './components/admin/admin-courses/admin-courses.component';
import { AdminCourseInfoComponent } from './components/admin/admin-course-info/admin-course-info.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { AdminGuardService as AdminGuard } from './services/admin-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-courses', pathMatch: 'full', component: AdminCoursesComponent, canActivate: [AdminGuard] },
  { path: 'courses', pathMatch: 'full', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'add-course', component: CourseFormComponent, canActivate: [AdminGuard] },
  { path: 'courses/:id', component: CourseInfoComponent, canActivate: [AuthGuard] },
  { path: 'admin-courses/:id', component: AdminCourseInfoComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
