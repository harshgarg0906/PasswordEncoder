import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebPasswordService, EncryptedPassword } from '../web-password.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordData } from '../generatepassword/generatepassword.component';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit,OnDestroy {

  generatePassword:FormGroup;

  constructor(private passworsService:WebPasswordService,private _snackBar: MatSnackBar) { }
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
  ngOnInit(): void {
    console.log('in the init')
    this.generatePassword=new FormGroup({
      'websitename':new FormControl(null,[Validators.required])
    })
    this.updateSubject=this.passworsService.getUpdate().subscribe((data)=>{
      console.log('gttong the data anothe component')
      console.log(data)
      this.dataGenerated=data;
      this.generatePassword.patchValue({
        'websitename':data.webSiteName
      })
    })
  
  }

  onSubmit()
  {
    this.webSiteData.webSiteName=this.generatePassword.value.websitename;
    console.log(this.webSiteData)
    this.passworsService.getPassword(this.webSiteData).subscribe(
      (data)=>{
        console.log('Password generator function')
        console.log(data)
        this.savedData=data;
        console.log('After')
        console.log(this.savedData)
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
     console.log(this.dataGenerated)
    this.passworsService.updateWebsiteData(this.dataGenerated).subscribe((data)=>{
      this._snackBar.open("Data Updated", "Succesfully", {
        duration: 2000,
      });
      console.log('data after the updation')
      console.log(data)
})
    this.generatePassword.reset();
  }

  ngOnDestroy()
  {
     console.log('in the ng destroy')
     this.updateSubject.unsubscribe();
  }
  
  onCancel()
  {
    console.log('in the cancel')
    this.obtained=false;
    this.generatePassword.reset();
  }
}
