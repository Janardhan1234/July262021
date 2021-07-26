import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { titleDataType } from '../logindatatype';
import { EmployeeDetails } from '../employeedetails';

interface employeedetail{
    name: string;
    age:string;
    designation:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    tiles:titleDataType[] = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      ];
    employeeList:employeedetail[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  addEmployeedetails(name:string, age:string, designation:string){
    let detail = new EmployeeDetails(name, age, designation);
    this.employeeList.push(detail);
    console.log(detail);
  }

}
