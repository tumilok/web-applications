import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseInfoComponent } from './admin-course-info.component';

describe('AdminCourseInfoComponent', () => {
  let component: AdminCourseInfoComponent;
  let fixture: ComponentFixture<AdminCourseInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
