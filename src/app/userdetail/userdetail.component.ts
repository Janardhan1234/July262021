import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'dob', 'age', 'email','mobile','about','linkedin_profile','edit','delete'];
  dataSource: MatTableDataSource<any> | any;

  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator | any;
  @ViewChild(MatSort, {static: true}) sort: MatSort | any;

  userDetails: any;
  listData: any  = [];
  // lengthData;

  constructor(private apiService:ApiService, public dialog: MatDialog, private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(result=>{
      console.log(result);
      // this.userDetails = result;
      // this.listData.push(result);
      this.dataSource = new MatTableDataSource(result);      
      console.log("dataSource", this.dataSource);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;      
    })

    
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

}
function DialogContentExampleDialog(DialogContentExampleDialog: any) {
  throw new Error('Function not implemented.');
}

