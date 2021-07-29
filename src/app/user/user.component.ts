import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ["",[Validators.required, Validators.minLength(4)]],
      about: ["",Validators.required],
      dob: ["",[Validators.required,Validators.pattern('^(?:(?:10|12|0?[13578])/(?:3[01]|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|(?:11|0?[469])/(?:30|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/(?:2[0-8]|1[0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/29/[2468][048]00|0?2/29/[3579][26]00|0?2/29/[1][89][0][48]|0?2/29/[2-9][0-9][0][48]|0?2/29/1[89][2468][048]|0?2/29/[2-9][0-9][2468][048]|0?2/29/1[89][13579][26]|0?2/29/[2-9][0-9][13579][26])$')]],
      age: ["",[Validators.required,Validators.pattern('[0-9]*')]],
      phone: ["",[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ["",[Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      linkedin_profile: ["",[Validators.required,Validators.pattern('^https:\\/\\/[a-z]{2,3}\\.linkedin\\.com\\/.*$')]]      
    });
  }

  getUserDetail(event:any){
    event.preventDefault();
    let name = this.userForm.controls['name'].value;
    let about = this.userForm.controls['about'].value;
    let dob = this.userForm.controls['dob'].value;
    let age = this.userForm.controls['age'].value;
    let phone = this.userForm.controls['phone'].value;
    let email = this.userForm.controls['email'].value;
    let linkedin_profile = this.userForm.controls['linkedin_profile'].value;

    let obj={
      name:name,
      about:about,
      dob:dob,
      age:age,
      phone:phone,
      email:email,
      linkedin_profile:linkedin_profile
    }

    console.log(obj);
    

  }

}
