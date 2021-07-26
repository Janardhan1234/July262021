import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {loginDataType} from '../logindatatype';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {

  // invalidCredentialMsg: string;
  //   username:string;
  //   password:string;
  //   retUrl:string="home";


  loginForm:any;

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }


  constructor(
    // private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      // name: ["",[Validators.required, Validators.minLength(4)]],
      email: ["",Validators.required],
      password: ["", [Validators.required, this.createPasswordStrengthValidator()]],
    });
      
  }

  // get name(){  
  //   return this.loginForm.controls['name'];
  // }
//   get email() {
//     return this.loginForm.controls['email'];
// }

// get password() {
//     return this.loginForm.controls['password'];
// }
  getUserProfile(e:any) {
    e.preventDefault();
    console.log(this.loginForm.get('email').value);
    console.log(this.loginForm.controls['email'].value);
    console.log(this.loginForm.controls['password'].value);
    let emailValue = this.loginForm.controls['email'].value;
    let passwordValue = this.loginForm.controls['password'].value;
    let user:loginDataType ={
      "email": emailValue,
      "password": passwordValue
    }
    this.http.post('https://picxls-testing.herokuapp.com/api/signin', user).subscribe(
      res =>{console.log(res)    
      
        alert("logged in succesfully");
        this.router.navigateByUrl('/home');
      
      } ,
      err =>{console.log(err)
      alert("incorrect email id or password")
      } 
    );
    console.log("result", user);
    // return  
  }

  createPasswordStrengthValidator():ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null =>{
      console.log(control.value);
      const value = control.value;

      if (!value) {
          return null;
      }

      const hasUpperCase = /[A-Z]+/.test(value);

      const hasLowerCase = /[a-z]+/.test(value);

      const hasNumeric = /[0-9]+/.test(value);

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

      console.log(!passwordValid ? {passwordStrength:true}: null);

      return !passwordValid ? {passwordStrength:true}: null;
  }
    //  return null; 
    
  }

}
