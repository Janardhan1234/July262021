import { Component, Inject, OnInit, Pipe } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { getLocaleDateFormat } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDate } from '@angular/common'





@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm: any;
  

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private apiService:ApiService,
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData | any,
    public pipe: Pipe

  ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    
    this.userForm = this.formBuilder.group({
      name: ["",[Validators.required, Validators.minLength(4)]],
      about: ["",Validators.required],
      dob: [formatDate(new Date("Jan 24, 2000"), "yyyy-MM-dd", "en"),[Validators.required]],
      // Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
      age: ["",[Validators.required,Validators.pattern('[0-9]*')]],
      phone: ["",[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ["",[Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      linkedin_profile: ["",[Validators.required,Validators.pattern('^https:\\/\\/[a-z]{2,3}\\.linkedin\\.com\\/.*$')]],      
      editor:['']
    });

    console.log("data", this.data.dialagText);

    if (this.data.dialagText) {
      let id = this.data.dialogText;
      this.apiService.getDataById(id)          
          .subscribe(x =>{
            console.log("id value",  this.data.dialagText);
            let idValue = this.data.dialagText;
            let value = x;
            let obj = value.find(o => o._id === idValue);
            console.log("obj", obj);
            // this.userForm.patchValue(x)
            let dateConversion = new Date(obj.dob);
            // let monthFormat = dateConversion.getMonth() < 10 ? ('0'+ dateConversion.getMonth() ) : dateConversion.getMonth();
            let formatted_date = dateConversion.getDate() + "-" + (dateConversion.getMonth() + 1) + "-" + dateConversion.getFullYear()

            let formatedDate = formatDate(obj.dob,'dd-MM-yyyy','en');


            console.log("formated date", formatDate(obj.dob,'dd-MM-yyyy','en'));
            // this.userForm.get('dob').setValue({
            //   year: parseInt(formatedDate.format('YYYY'), 10),
            //   month: parseInt(formatedDate.format('M'), 10),
            //   day: parseInt(formatedDate.format('D'), 10)
            // });
             
            this.userForm.patchValue({
              name: obj.name,
              about: obj.about,
              dob:formatDate(new Date(obj.dob), "yyyy-MM-dd", "en"),
              // dob:this.pipe.transform(
              //   this.addEmployeeForm.value.DOB,
              //   "yyyy-MM-dd"
              // ),
              age: obj.age,
              phone: obj.phone,
              email: obj.email,
              linkedin_profile: obj.linkedin_profile
              
              }
            );
          }) ;
  }

   
  }

  formatDate(date:any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [day, month,  year].join('-');
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
