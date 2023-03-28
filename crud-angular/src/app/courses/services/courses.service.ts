import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient,  private router: Router) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(),
        //delay(5000),
        // tap(courses => console.log(courses))
      );
  }

  saveCourse(record: Course) {
    console.log('Record to save:', record);
    return this.httpClient.post<Course>(this.API, record);

}

deleteCourse(courseId: string) {
  return this.httpClient.delete(`${this.API}/${courseId}`);
}

updateCourse(course: Course): Observable<Course> {
  const url = `${this.API}/${course._id}`;
  return this.httpClient.put<Course>(url, course);
}

}





