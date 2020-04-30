import { Component, OnInit } from '@angular/core';
import { WebPasswordService, EncryptedPassword } from '../web-password.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface PasswordData{
  webSiteName:string
}
@Component({
  selector: 'app-generatepassword',
  templateUrl: './generatepassword.component.html',
  styleUrls: ['./generatepassword.component.css']
})
export class GeneratepasswordComponent implements OnInit {

  constructor(private passwordService:WebPasswordService) { }

  generatePassword:FormGroup;
  webSiteData:PasswordData={
    webSiteName:''
  };
  savedData:EncryptedPassword={
    encryptedpassword:"",
    webSiteName:""
  }
  obtainedPassword:string='';
  obtained:boolean=false;
  ngOnInit(): void {
    this.generatePassword=new FormGroup({
      'websitename':new FormControl(null,[Validators.required])
    })
  }

  onSubmit()
  {
    this.webSiteData.webSiteName=this.generatePassword.value.websitename;
    console.log(this.webSiteData)
    this.passwordService.getPassword(this.webSiteData).subscribe(
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
    this.passwordService.savePassword(this.savedData).subscribe(
      (data)=>{
        console.log('After the saving')
        console.log(data)
      }
    );;
  }

}