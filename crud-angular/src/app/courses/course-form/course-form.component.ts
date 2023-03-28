import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private router: Router,

  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  onSubmit() {
    this.service.saveCourse(this.form.value).subscribe(
      () => {
        alert('Curso salvo com sucesso!');
        this.router.navigate(['/']);
      },
      () => {
        console.log('Ocorreu um erro ao salvar o curso.');
      }
    );
  }

  onCancel() {
    this.router.navigate(['/']);
  }


  }






