import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databound',
  templateUrl: './databound.component.html',
  styleUrls: ['./databound.component.css']
})
export class DataboundComponent implements OnInit {

  test1 = "interpolation value";
  inputValue = "test";
  showValue = "test";

  constructor() { }

  ngOnInit(): void {
  }

  changeEmailId(){
    this.inputValue="test@gmail.com";
  }

  twoWayBinding(){
    this.showValue = "value change in code";
    console.log("clicked")
  }

}
