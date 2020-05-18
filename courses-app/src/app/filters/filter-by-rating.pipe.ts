import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/Course';

@Pipe({
  name: 'filterByRating'
})
export class FilterByRatingPipe implements PipeTransform {

  transform(items: Course[], searchText: number): Course[] {
    if (!items) {return []; }
    if (!searchText) {return items; }
    return items.filter(it => {
      return Math.floor(it.score + 0.25) == searchText
     });
  }

}

