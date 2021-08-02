import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.css']
})
export class BankdetailsComponent implements OnInit {
  id: any;
  bankDetail: any;
  userid: any;
  

  constructor(
    private apiService:ApiService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData | any
  ) { }

  ngOnInit(): void {
    console.log("data", this.data.dialagText);

    // if (this.data.dialagText) {
    //   this.userid = this.data.dialagText;
    //   console.log(this.userid);

    //   this.apiService.getData().subscribe(result=>{
    //     console.log(result);
    //     console.log(this.userid);
    //     let userDetail = result;
    //     let obj = userDetail.find((o:any) => o._id === this.userid);
    //     console.log(obj);
        // console.log(this.id);
        // this.snackbar.open("user details submitted successfully",'',{
        //   duration:5000
        // })
        // this.editForm.reset()
      // },
      // error => {
      //   console.log(error);
      // })


     this.apiService.getBankDetail(this.data.dialagText)          
         .subscribe(x =>{
           console.log(x);

         this.bankDetail = x;
         console.log(this.bankDetail);
          //  console.log("id value",  this.data.dialagText);
          //  let idValue = this.data.dialagText;
          //  this.id = idValue;
          //  let value = x;
          //  let obj = value.find((o:any) => o._id === idValue);
          //  console.log("obj", obj);
          //  this.bankDetail = obj;            
          //  let dateConversion = new Date(obj.dob);            
          //  let formatted_date = dateConversion.getDate() + "-" + (dateConversion.getMonth() + 1) + "-" + dateConversion.getFullYear()

          //  let formatedDate = formatDate(obj.dob,'dd-MM-yyyy','en');


          //  console.log("formated date", formatDate(obj.dob,'dd-MM-yyyy','en'));
           
            
        //    this.editForm.patchValue({
        //      name: obj.name,
        //      about: obj.about,
        //      dob:formatDate(new Date(obj.dob), "yyyy-MM-dd", "en"),
        //      // dob:this.pipe.transform(
        //      //   this.addEmployeeForm.value.DOB,
        //      //   "yyyy-MM-dd"
        //      // ),
        //      age: obj.age,
        //      phone: obj.phone,
        //      email: obj.email,
        //      linkedin_profile: obj.linkedin_profile
             
        //      }
        //    );
         }) ;
//  }
  }

}
