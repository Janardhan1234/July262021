import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  test = 'this is test';
  selectdate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
