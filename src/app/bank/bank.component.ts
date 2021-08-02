import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  bankForm: any;

  foods  = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  userData: Object;

  selectedValue:any;
  selectedUser: any;
  

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private apiService:ApiService,
    private snackbar: MatSnackBar,
   
  ) { }

  ngOnInit(): void {

    this.bankForm = this.formBuilder.group({
      bankName: ["",Validators.required],
      ifsc: ["",[Validators.required, Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]],
      accountNumber: ["",Validators.required],      
      amount: ["",Validators.required],      
    });

    this.apiService.getData().subscribe(result=>{
      console.log(result);
      // this.userDetails = result;
      // this.listData.push(result);
      this.userData = result;
      
    },
    error => {console.log(error);}
    )
  }

  selected(value:any){
    console.log(value);
    this.selectedUser = value;
    // this.apiService.postBankDetail(value).subscribe(result=>{
    //   console.log(result);
      // this.userDetails = result;
      // this.listData.push(result);
      // this.userData = result;
      
    // },
    // error => {console.log(error);}
    // )
  
  }

  bankFormSubmit(event:any){
    event.preventDefault();
    let obj={
      bankName:  this.bankForm.get('bankName').value,
      ifsc: this.bankForm.get('ifsc').value,
      accountNumber: this.bankForm.get('accountNumber').value,      
      amount: this.bankForm.get('amount').value,
    }
    this.apiService.postBankDetail(this.selectedUser,obj).subscribe(result=>{
      console.log(result);
      // this.userDetails = result;
      // this.listData.push(result);
      // this.userData = result;
      this.snackbar.open("bank details submitted successfully",'',{
        duration:5000
      })
      
    },
    error => {console.log(error);}
    )
  }

}
