import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { ListdetailComponent } from './listdetail/listdetail.component';


@NgModule({
  declarations: [AdminloginComponent, AdminlistComponent, ListdetailComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
