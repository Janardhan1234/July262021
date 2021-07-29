import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  userDetails: any;

  constructor(private apiService:ApiService ) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(result=>{
      console.log(result);
      this.userDetails = result;
    })
  }

}
