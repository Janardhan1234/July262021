import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router, RouterEvent } from '@angular/router';



@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {

  departmentList = [{
    id: 1,
    department: "angular"
  },{
    id: 2,
    department: "angular2"
  }]
  selectedItem:any;


  constructor(private resolver:ComponentFactoryResolver, private router:Router,  private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get("id");
      this.selectedItem = id;
      console.log("selected item", id);
    })

  }

  onselect(department:any){
    console.log(department.id);
    this.router.navigate(['/admin/listdetail', department.id]);
  }

  isSelectedItem(department:any){
    console.log("is selected");
    console.log(parseInt(this.selectedItem) === department.id);
    return parseInt(this.selectedItem) === department.id;
  }



}
