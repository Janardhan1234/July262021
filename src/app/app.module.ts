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
import { DataboundComponent } from './databound/databound.component';
import { ExternaltemplateComponent } from './externaltemplate/externaltemplate.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule, MatDialogRef, MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { QuillModule } from 'ngx-quill';
import { UpdateComponent } from './update/update.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { BankComponent } from './bank/bank.component';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';
// import {MatSelectModule} from '@angular/material/select';






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
    DataboundComponent,
    ExternaltemplateComponent,
    ParentComponent,
    ChildComponent,
    StylebindingComponent,
    UserComponent,
    UserdetailComponent,
    UpdateComponent,
    BankComponent,
    BankdetailsComponent,
   
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
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    QuillModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    // MatSelectModule  
   
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    MatDialog,    
    
    AuthGuard, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
