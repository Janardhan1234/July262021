import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { ListdetailComponent } from './listdetail/listdetail.component';

const routes: Routes = [

  {
    path:'adminlogin',
    component: AdminloginComponent
  },
  {
    path:"adminlist",
    component: AdminlistComponent
  },
  {
  path:'listdetail/:id',
  component: ListdetailComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
