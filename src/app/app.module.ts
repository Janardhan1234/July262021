import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PictureComponent } from './picture/picture.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { RegistrationComponent } from './registration/registration.component';
import { ChildacomponentComponent } from './childacomponent/childacomponent.component';
import { ChildbcomponentComponent } from './childbcomponent/childbcomponent.component';
import { DisplayComponent } from './display/display.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductService } from './product.service';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { ReplacePipe } from './replace.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PictureComponent,
    LoginComponent,
    RegistrationComponent,
    ChildacomponentComponent,
    ChildbcomponentComponent,
    DisplayComponent,
    ProductlistComponent,
    TemplatedrivenComponent,    
    CustompipeComponent,
    ReplacePipe,
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatGridListModule   
  ],
  providers: [AuthGuard, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
