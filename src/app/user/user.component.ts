import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { getLocaleDateFormat } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';





@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm: any;
  

  constructor(private formBuilder: FormBuilder,private http: HttpClient, private apiService:ApiService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ["",[Validators.required, Validators.minLength(4)]],
      about: ["",Validators.required],
      dob: ["",[Validators.required]],
      // Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
      age: ["",[Validators.required,Validators.pattern('[0-9]*')]],
      phone: ["",[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ["",[Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      linkedin_profile: ["",[Validators.required,Validators.pattern('^https:\\/\\/[a-z]{2,3}\\.linkedin\\.com\\/.*$')]],      
      editor:['']
    });

  

   
  }

  getUserDetail(event:any){
    event.preventDefault();
    console.log("user form", this.userForm);
    let name = this.userForm.controls['name'].value;
    let about = this.userForm.controls['about'].value;
    let dob = this.userForm.controls['dob'].value;
    let age = this.userForm.controls['age'].value;
    let phone = parseInt(this.userForm.controls['phone'].value);
    let email = this.userForm.controls['email'].value;
    let linkedin_profile = this.userForm.controls['linkedin_profile'].value;
    
    console.log("type of phone", typeof phone);

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

    // this.http.post('http://localhost:8000/api/user', obj).map((response: Response)=>response.json()).subscribe(data:any=>{alert(data:any)});

    // this.http.post('http"//localhost:8000/api/user', obj).subscribe(
    //   res =>{console.log(res)    
      
    //     alert("logged in succesfully");
    //     // this.router.navigateByUrl('/home');
      
    //   } ,
    //   err =>{console.log(err)
    //   alert("incorrect email id or password")
    //   } 
    // );
    // console.log("result", user);
    // return  

    this.apiService.postData(obj).subscribe(result=>{
      console.log(result);
      this.snackbar.open("user details submitted successfully",'',{
        duration:5000
      })
      this.userForm.reset()
    })

  }

  getApiData(){
    
  }

}
