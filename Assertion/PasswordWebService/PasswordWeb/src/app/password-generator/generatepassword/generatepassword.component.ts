import { Component, OnInit } from '@angular/core';
import { WebPasswordService, EncryptedPassword } from '../web-password.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserauthService } from 'src/app/user-management/userauth.service';

export interface PasswordData{
  webSiteName:string
}
@Component({
  selector: 'app-generatepassword',
  templateUrl: './generatepassword.component.html',
  styleUrls: ['./generatepassword.component.css']
})
export class GeneratepasswordComponent implements OnInit {

  constructor(private passwordService:WebPasswordService,private _snackBar: MatSnackBar,private userAuthService:UserauthService) { }

  generatePassword:FormGroup;
  webSiteData:PasswordData={
    webSiteName:''
  };
  savedData:EncryptedPassword={
    encryptedpassword:"",
    webSiteName:"",
    psid:""
  }
  obtainedPassword:string='';
  obtained:boolean=false;
  psid:string
  ngOnInit(): void {
    this.generatePassword=new FormGroup({
      'websitename':new FormControl(null,[Validators.required])
    })
    this.userAuthService.getPsidBehaviourSubject().subscribe((data)=>{
      this.psid=data
    })
  }

  onSubmit()
  {
    this.webSiteData.webSiteName=this.generatePassword.value.websitename;
    this.passwordService.getPassword(this.webSiteData).subscribe(
      (data)=>{
        this.savedData=data;
        this.obtained=true;
        this.obtainedPassword=data.encryptedpassword;
      }
    );
    
  }

  onSave()
  {
    this.obtained=false;
    this.savedData.psid=this.psid;
    this.passwordService.savePassword(this.savedData).subscribe(
      (data)=>{
        if(data.duplicate==true)
        {
          this._snackBar.open("Data Exist", "Already", {
            duration: 2000,
          });
        }
        else
        {
          this._snackBar.open("Data Saved", "Succefuly", {
            duration: 2000,
          });        
        }
       
      }
    );;
    this.generatePassword.reset();
  }

  onCancel()
  {
    this.obtained=false;
    this.generatePassword.reset();
  }

}
