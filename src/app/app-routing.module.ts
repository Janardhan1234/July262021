import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PictureComponent } from './picture/picture.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  { path: 'home',  
  component: HomeComponent
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
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }