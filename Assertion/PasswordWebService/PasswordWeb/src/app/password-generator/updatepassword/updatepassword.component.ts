import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebPasswordService } from '../web-password.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit,OnDestroy {

  generatePassword:FormGroup;

  constructor(private passworsService:WebPasswordService) { }
  updateSubject:Subscription;
  ngOnInit(): void {
    console.log('in the init')
    // this.updateSubject=this.passworsService.getUpdate().subscribe((data)=>{
    //   console.log('gttong the data anothe component')
    //   console.log(data)
    // })
    this.generatePassword=new FormGroup({
      'websitename':new FormControl(null,[Validators.required])
    })
  }

  onSubmit()
  {
    
  }


  ngOnDestroy()
  {
     console.log('in the ng destroy')
     this.updateSubject.unsubscribe();
  }

}
