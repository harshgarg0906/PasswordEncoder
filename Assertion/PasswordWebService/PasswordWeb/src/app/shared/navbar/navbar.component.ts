import { Component, OnInit } from '@angular/core';
import { UserauthService } from 'src/app/user-management/userauth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userAuthService:UserauthService) { }
  isLogin:boolean=false;
  ngOnInit(): void {

    this.userAuthService.getLoginBehaviourSubject().subscribe((data)=>{
      console.log('inside the login')
      console.log('hello')
      console.log(data)
       if(data===null)
       {
         console.log('if condition false')
         this.isLogin=false;
       }
       else if(data!=null)
       { console.log('if condituon')
         this.isLogin=true;
       }
       console.log(this.isLogin)
    })
  }

}
