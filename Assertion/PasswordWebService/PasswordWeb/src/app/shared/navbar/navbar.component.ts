import { Component, OnInit } from '@angular/core';
import { UserauthService } from 'src/app/user-management/userauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userAuthService:UserauthService,private router:Router) { }
  isLogin:boolean=false;
  ngOnInit(): void {

    this.userAuthService.getLoginBehaviourSubject().subscribe((data)=>{
       if(data===null)
       {
         this.isLogin=false;
       }
       else if(data!=null)
       {
         this.isLogin=true;
       }
    })
  }

  onLogout()
  {
    this.userAuthService.logout().subscribe((data)=>{
      console.log('logout succesfule')
      console.log(data)
      this.isLogin=false;
      this.router.navigate(['/login']);
    });
  }

}
