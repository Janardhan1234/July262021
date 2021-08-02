import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UpdateComponent } from '../update/update.component';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { BankdetailsComponent } from '../bankdetails/bankdetails.component';



@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'dob', 'age', 'email','mobile','about','linkedin_profile','edit', 'bank', 'delete'];
  dataSource: MatTableDataSource<any> | any;

  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator | any;
  @ViewChild(MatSort, {static: true}) sort: MatSort | any;

  userDetails: any;
  listData: any  = [];
  id: any;
  deleteData: any;
  range: any;
  // lengthData;

 
  constructor(
    private apiService:ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(result=>{
      console.log(result);
      // this.userDetails = result;
      // this.listData.push(result);
      this.deleteData = result;
      this.dataSource = new MatTableDataSource(result);      
      console.log("dataSource", this.dataSource);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;      
    })

    this.range = this.formBuilder.group({
      start: ["",Validators.required],
      end: ["",Validators.required]
    });

    

    
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  // showModal(){
  //   $("#myModal").modal('show');
  // }

  //  ngAfterViewInit() {
  //   this.dataSource.sort = this.sort; 
  // }

  delteItem(id:any){
    this.id = id;
    this.apiService.deleteDataById(id)
    .subscribe(
      response => {
        console.log(response);
        // this.router.navigateByUrl('/user');
        console.log(this.dataSource);
        const item = this.deleteData.find(item => item.id === this.id);
    this.deleteData.splice(this.deleteData.indexOf(item));
    this.dataSource = new MatTableDataSource(this.deleteData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;      
        this.snackbar.open("user details submitted successfully",'',{
          duration:5000
        })
      },
      error => {
        console.log(error);
      });
  }

  applyFilter(event: Event) {
    console.log("filter");
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    // console.log("selected value", value);
    const dialogRef = this.dialog.open(UserComponent);   

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogEdit(value:any) {
    console.log("selected value", value);
    const dialogRef = this.dialog.open(UpdateComponent,{
      data:{dialagText: value}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogBank(value:any) {
    console.log("selected value", value);
    const dialogRef = this.dialog.open(BankdetailsComponent,{
      data:{dialagText: value}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  dataDispaly(value:any){
    this.dataSource = new MatTableDataSource(value);            
    this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;   
  }

  lessthan(value:any){

    

    if(value){
      console.log(value, this.userDetails)
     let lessthanValue  = this.deleteData.filter((item:any) => item.age < value);
    //  this.dataSource.filter = lessthanValue;
     this.dataDispaly(lessthanValue);
    console.log(lessthanValue);
    }else{
      console.log(value, this.deleteData);
      this.dataDispaly(this.deleteData);
    }
    

  }

  greaterthan(value:any){
    if(value){
      console.log(value, value)
      let greaterthan  = this.deleteData.filter((item:any) => item.age > value);
     //  this.dataSource.filter = lessthanValue;
     this.dataDispaly(greaterthan);
    }else{
      this.dataDispaly(this.deleteData);
    }
  }

  dateRange(value:any){
    console.log(value);
    if(value.start && value.end){
      let startDate = value.start;
       let endDate = value.end;
      
      
      let formatted_start_date = formatDate(new Date(startDate), "dd-MM-yyyy", "en");
      let formatted_end_date = formatDate(new Date(endDate), "dd-MM-yyyy", "en")
      
      console.log(formatted_start_date);
      let dateRange  = this.deleteData.filter((item:any) =>{
          console.log(formatDate(new Date(item.dob), "dd-MM-yyyy", "en"))
          return (formatDate(new Date(item.dob), "dd-MM-yyyy", "en") > formatted_start_date && formatDate(new Date(item.dob), "dd-MM-yyyy", "en") < formatted_end_date);
      }) 
      
      console.log(dateRange);
      this.dataDispaly(dateRange);
    }else{
      this.dataDispaly(this.deleteData);
    }
  }

  clearDateRange(){
    this.range.reset();
  }

}
function DialogContentExampleDialog(DialogContentExampleDialog: any) {
  throw new Error('Function not implemented.');
}

