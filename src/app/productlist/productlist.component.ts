import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productList:any;

  

  constructor(private product:ProductService) { }

  ngOnInit(): void {

    this.productList = this.product.getProduct();
  }



}
