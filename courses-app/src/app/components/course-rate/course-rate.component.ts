import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Course } from '../../models/Course';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-course-rate',
  templateUrl: './course-rate.component.html',
  styleUrls: ['./course-rate.component.css']
})
export class CourseRateComponent implements OnInit {
  @Input() course: Course;
  votedNumber: number = 0;
  stars = [];

  @ViewChild('firstStar', { static: false }) firstStar: ElementRef;
  @ViewChild('secondStar', { static: false }) secondStar: ElementRef;
  @ViewChild('thirdStar', { static: false }) thirdStar: ElementRef;
  @ViewChild('fourthStar', { static: false }) fourthStar: ElementRef;
  @ViewChild('fifthStar', { static: false }) fifthStar: ElementRef;

  ngAfterViewInit() {
    this.stars.push(this.firstStar);
    this.stars.push(this.secondStar);
    this.stars.push(this.thirdStar);
    this.stars.push(this.fourthStar);
    this.stars.push(this.fifthStar);
    this.displayStars(this.course.score);
  }

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
  }

  private displayStars(score: number) {
    if (score > 5) return;
    for (let star of this.stars) {
      if (score >= 0.75) {
        star.nativeElement.src = "assets/img/star-filled.png";
      } else if (score >= 0.25) {
        star.nativeElement.src = "assets/img/star-half-empty.png";
      } else {
        star.nativeElement.src = "assets/img/star-empty.png";
      }
      score--;
    }
  }

  changeScore(userRate: number) {
    if (this.course.score === null) {
      this.course.score = userRate;
    } else {
      this.course.score =  (this.course.score * this.votedNumber + userRate) / (this.votedNumber + 1);
    }
    this.votedNumber++;
    this.displayStars(this.course.score);
  }

}
