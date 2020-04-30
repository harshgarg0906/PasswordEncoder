import { Component, OnInit } from '@angular/core';
import { UserauthService } from '../userauth.service';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface UserData{
  psid:string
  password:string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userAuthService:UserauthService,private route:Router) { }
  loginForm:FormGroup;
  data:UserData={
    psid:'',
    password:''
  }
  wrongPassword:boolean=false;
  passwordWrong:string='';
  wrongCredentials:boolean=false;

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      'psid':new FormControl(null,[Validators.required]),
      'password':new FormControl(null,[Validators.required])
    })
  }

 onSubmit()
 {
   this.data.psid=this.loginForm.value.psid;
   this.data.password=this.loginForm.value.password;
   this.userAuthService.onLogin(this.data).subscribe(
    (data)=>{
      console.log(data)
      if(data.statusCode=='200')
      {
        this.route.navigate(['/password'])
      }
      if(data.statusCode==203)
      {
         this.wrongPassword=true;
         this.passwordWrong=data.message;
      }
    },(error)=>{
      if(error=="PSID Not Found")
      {
        this.wrongCredentials=true;
        this.wrongPassword=false;
      }
    }
  );;
 }
 onClick()
 {
   console.log('functionin the clicl ')
   this.userAuthService.getData();
 }

 onLoginAgain()
 {
   this.wrongPassword=false;
   this.wrongCredentials=false;
 }
}
