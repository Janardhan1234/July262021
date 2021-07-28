import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  title = 'style-binding';
  hasError : boolean = false;
  styleArray = ['errorClass', 'boldClass'];
  styleObject = {
    'errorClass': false,
    'boldClass':true,
    'italicsClass':true,
    'greenClass':true
  }

  constructor() { }

  ngOnInit(): void {
  }
  getGreenClass(){
    return 'greenClass';
  }

}
