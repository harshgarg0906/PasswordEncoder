import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserauthService } from 'src/app/user-management/userauth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {

  userAuthSubscription:Subscription;
  constructor(private userAuthService:UserauthService,private router:Router) { }
  isLogin:boolean=false;
  ngOnInit(): void {

  this.userAuthSubscription= this.userAuthService.getLoginBehaviourSubject().subscribe((data)=>{
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

  ngOnDestroy()
  {
    this.userAuthSubscription.unsubscribe();
  }

}
