import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {
  userForm: any;
  form: any;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    // private apiService:ApiService,
    // private snackbar: MatSnackBar,
) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({     
      email: ["",[Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ["",Validators.required],
      lessons: this.formBuilder.array([])
     
      
    });
  }

  get lessons() {
    return this.userForm.controls["lessons"] as FormArray;
  }

  addLesson() {
    const lessonForm = this.formBuilder.group({
        title: ['', Validators.required],
        level: ['beginner', Validators.required]
    });
  
    this.lessons.push(lessonForm);
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
}

}
