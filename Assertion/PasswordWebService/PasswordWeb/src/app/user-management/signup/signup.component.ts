import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserauthService } from '../userauth.service';
import { Router } from '@angular/router';
import { UserData } from '../login/login.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userAuthService:UserauthService,private router:Router,private _snackBar: MatSnackBar) { }
  signUpForm:FormGroup;

  data:UserData={
    psid:'',
    password:'',
    email:''
  }
  ngOnInit(): void {

    this.signUpForm=new FormGroup({
      'psid':new FormControl(null,[Validators.required]),
      'password':new FormControl(null,[Validators.required]),
      'email':new FormControl(null,[Validators.required])
    })
  }


  onSubmit()
  {
    console.log('in the submit')
    this.data.psid=this.signUpForm.value.psid;
    this.data.password=this.signUpForm.value.password;
    this.data.email=this.signUpForm.value.email;
    console.log(this.data)
    this.userAuthService.onSingUp(this.data).subscribe((data)=>{
        console.log('after the signup')
        console.log(data)
        if(data.exist==true)
        {
          console.log('useer exist')
          this._snackBar.open("User Exist", "Already", {
            duration: 2000,
          });
        }
        else{
          console.log('new user')
          this.router.navigate(['/login'])
        }
    })
  }
} 
