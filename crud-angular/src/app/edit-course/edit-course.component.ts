import { Course } from './../courses/model/course';

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})


export class EditCourseComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditCourseComponent>,
    @Inject(MAT_DIALOG_DATA) { name, category, _id }: Course
  ) {
    this.form = fb.group({
      name: [name, Validators.required],
      category: [category, Validators.required],
      _id: [_id]
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
