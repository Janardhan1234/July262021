import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-externaltemplate',
  template: `
  <div class="container m-4">
    <div class="text-center">Inline Template</div>
    </div>
  `,
  styles: [
    `     
      div {        
        
        font-size:40px;
      }
    `
  ]

  // templateUrl: './externaltemplate.component.html',
  // styleUrls: ['./externaltemplate.component.css']
})
export class ExternaltemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
