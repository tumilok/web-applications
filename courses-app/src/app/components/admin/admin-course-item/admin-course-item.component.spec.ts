import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseItemComponent } from './admin-course-item.component';

describe('AdminCourseItemComponent', () => {
  let component: AdminCourseItemComponent;
  let fixture: ComponentFixture<AdminCourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
