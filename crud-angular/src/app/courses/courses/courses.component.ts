import { EditCourseComponent } from './../../edit-course/edit-course.component';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Course } from './../model/course';
import { CoursesService } from './../../courses/services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  dialogRef: any;

  displayedColumns = ['_id', 'name', 'category', 'actions'];

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.coursesService.list().subscribe(
      (data: Course[]) => {
        this.courses = data;
      },
      (error: any) => {
        // Handle error here
        console.error('Um erro Ocorreu:', error);
        // Show popup to the user
        alert('Por favor tente mais tarde.');
      }
    );
  }

  onAdd() {
    this.router.navigate(['/courses/new']);
  }

  onDelete(course: Course) {
    console.log('Excluindo o curso:', course);
    if (
      confirm(
        `Tem certeza que deseja excluir o curso "${course.name}"?`
      )
    ) {
      this.coursesService.deleteCourse(course._id).subscribe(
        () => {
          this.courses = this.courses.filter(
            (c) => c._id !== course._id
          );
          console.log(`Curso "${course.name}" excluído com sucesso.`);
        },
        (error) => {
          console.log(
            `Erro ao excluir o curso "${course.name}".`,
            error
          );
          alert(`Erro ao excluir o curso "${course.name}".`);
        }
      );
    }
  }

  onEdit(course: Course) {
    const dialogRef = this.dialog.open(EditCourseComponent, {
      width: '500px',
      data: course
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const updatedCourse = { ...course, ...result };
        this.coursesService.updateCourse(updatedCourse).subscribe(
          () => {
            this.courses = this.courses.map(c => {
              return c._id === updatedCourse._id ? updatedCourse : c;
            });
            console.log(`Curso "${updatedCourse.name}" atualizado com sucesso.`);
          },
          (error) => {
            console.log(
              `Erro ao atualizar o curso "${updatedCourse.name}".`,
              error
            );
            alert(`Erro ao atualizar o curso "${updatedCourse.name}".`);
          }
        );
      }
    });
  }
}











