import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  chocolate = 0;
  thankYouText = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendToChild() {
    this.chocolate++;
  }

  sayThanks(event:any) {
    this.thankYouText = event;
  }

}
