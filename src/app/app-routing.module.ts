import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildacomponentComponent } from './childacomponent/childacomponent.component';
import { ChildbcomponentComponent } from './childbcomponent/childbcomponent.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { DisplayComponent } from './display/display.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PictureComponent } from './picture/picture.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RegistrationComponent } from './registration/registration.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';


const routes: Routes = [
  { path: '',  
  component: DisplayComponent
},
  { path: 'home',  
  component: HomeComponent,
  children:[
    {path: 'child-a', component: ChildacomponentComponent},
    {path: 'child-b', component: ChildbcomponentComponent}]

},
  { path: 'login',  
  component: LoginComponent
  
},
{
  path:'register',
  component: RegistrationComponent
},
// { path: 'home',
//   component:  HomeComponent
// },
  { path: 'picture',
  component:  PictureComponent
},{
  path:'admin', canActivate:[AuthGuard],
  loadChildren:()=>import('./admin/admin.module')
  .then(mod=>mod.AdminModule)
},
{
  path:'productlist',
  component:ProductlistComponent
},
{
  path:'templateform',
  component:TemplatedrivenComponent
},
{
  path:'custompipe',
  component: CustompipeComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }