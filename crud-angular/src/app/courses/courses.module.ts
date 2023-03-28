import { EditCourseComponent } from './../edit-course/edit-course.component';

import { CategoryPipe } from './../shared/pipes/category.pipe';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CourseFormComponent } from './course-form/course-form.component';








@NgModule({
  declarations: [
    CoursesComponent,
    CategoryPipe,
    CourseFormComponent,
    EditCourseComponent,

  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,



  ]
})
export class CoursesModule { }
