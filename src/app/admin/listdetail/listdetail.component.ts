import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterEvent } from '@angular/router';



@Component({
  selector: 'app-listdetail',
  templateUrl: './listdetail.component.html',
  styleUrls: ['./listdetail.component.css']
})
export class ListdetailComponent implements OnInit {

  selectedDepartment:any;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.selectedDepartment = id;
  

  }

}
