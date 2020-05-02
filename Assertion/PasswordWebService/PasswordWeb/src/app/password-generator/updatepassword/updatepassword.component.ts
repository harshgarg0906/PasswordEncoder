import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebPasswordService, EncryptedPassword } from '../web-password.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordData } from '../generatepassword/generatepassword.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserauthService } from 'src/app/user-management/userauth.service';
@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit,OnDestroy {

  generatePassword:FormGroup;

  constructor(private passworsService:WebPasswordService,private _snackBar: MatSnackBar,private userAuthService:UserauthService) { }
  updateSubject:Subscription;
  savedData:EncryptedPassword={
    encryptedpassword:"",
    webSiteName:""
  }
  webSiteData:PasswordData={
    webSiteName:''
  };
  obtainedPassword:string='';
  obtained:boolean=false;
  dataGenerated:EncryptedPassword;
  psid:string;
  ngOnInit(): void {
    this.generatePassword=new FormGroup({
      'websitename':new FormControl(null,[Validators.required])
    })
    this.updateSubject=this.passworsService.getUpdate().subscribe((data)=>{
      this.dataGenerated=data;
      this.generatePassword.patchValue({
        'websitename':data.webSiteName
      })
    })

    this.userAuthService.getPsidBehaviourSubject().subscribe((data)=>{
      this.psid=data;
    })

  
  }

  onSubmit()
  {
    this.webSiteData.webSiteName=this.generatePassword.value.websitename;
    this.passworsService.getPassword(this.webSiteData).subscribe(
      (data)=>{
        this.savedData=data;
        this.obtained=true;
        this.obtainedPassword=data.encryptedpassword;
      }
    );
  }

  onSave()
  {
    console.log('In the save function')
    this.obtained=false;
     this.dataGenerated.webSiteName=this.generatePassword.value.websitename;
     this.dataGenerated.encryptedpassword=this.savedData.encryptedpassword;
    this.passworsService.updateWebsiteData(this.dataGenerated,this.psid).subscribe((data)=>{
      this._snackBar.open("Data Updated", "Succesfully", {
        duration: 2000,
      });
})
    this.generatePassword.reset();
  }

  ngOnDestroy()
  {
     this.updateSubject.unsubscribe();
  }
  
  onCancel()
  {
    this.obtained=false;
    this.generatePassword.reset();
  }
}
