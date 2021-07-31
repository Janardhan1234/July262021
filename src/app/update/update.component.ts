import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  editForm: any;
  id: any;
  

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private apiService:ApiService,
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData | any) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      name: ["",[Validators.required, Validators.minLength(4)]],
      about: ["",Validators.required],
      dob: ["", "yyyy-MM-dd", "en"),[Validators.required]],
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
            this.id = idValue;
            let value = x;
            let obj = value.find(o => o._id === idValue);
            console.log("obj", obj);            
            let dateConversion = new Date(obj.dob);            
            let formatted_date = dateConversion.getDate() + "-" + (dateConversion.getMonth() + 1) + "-" + dateConversion.getFullYear()

            let formatedDate = formatDate(obj.dob,'dd-MM-yyyy','en');


            console.log("formated date", formatDate(obj.dob,'dd-MM-yyyy','en'));
            
             
            this.editForm.patchValue({
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

  editUserDetail(event:any){
    event.preventDefault();
    console.log("user form", this.editForm);
    let name = this.editForm.controls['name'].value;
    let about = this.editForm.controls['about'].value;
    let dob = this.editForm.controls['dob'].value;
    let age = this.editForm.controls['age'].value;
    let phone = parseInt(this.editForm.controls['phone'].value);
    let email = this.editForm.controls['email'].value;
    let linkedin_profile = this.editForm.controls['linkedin_profile'].value;
    
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
    console.log(this.id);

    this.apiService.updateDataById(this.id, obj).subscribe(result=>{
      console.log(this.id);
      this.snackbar.open("user details submitted successfully",'',{
        duration:5000
      })
      // this.editForm.reset()
    })

  }

}
