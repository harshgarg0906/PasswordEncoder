import { Component, OnInit,ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { WebPasswordService, EncryptedPassword } from '../web-password.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {PasswordData} from '../generatepassword/generatepassword.component'
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { UserauthService } from 'src/app/user-management/userauth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-allcompany',
  templateUrl: './allcompany.component.html',
  styleUrls: ['./allcompany.component.css']
})



export class AllcompanyComponent implements OnInit,OnDestroy {
  displayedColumns: string[] = ['encryptedpassword', 'webSiteName','edit','delete'];
  dataSource = new MatTableDataSource<EncryptedPassword>(emptyData);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
   psid:string;
   psidSubscription:Subscription;
   passwordServiceSubscription:Subscription;
  constructor(private passwordService:WebPasswordService,private router:Router,private userAuthService:UserauthService){}
  ngOnInit() {
     this.psidSubscription= this.userAuthService.getPsidBehaviourSubject().subscribe((data)=>{
        this.psid=data;
      });
     this.passwordServiceSubscription= this.passwordService.getAllData(this.psid).subscribe((data)=>{
      this.dataSource= new MatTableDataSource(data);
    
    },(error)=>{
      console.log('in the error')
      console.log(error)
      this.noData=true;
      this.noDataMessage="No Data is Registered"
    })
    this.dataSource.paginator = this.paginator;
  }
  resultData: EncryptedPassword ={encryptedpassword:'',webSiteName:'',id:''};
    webSiteData:PasswordData={
    webSiteName:''
  };

    noDataMessage:string='';
    noData:boolean=false;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(data)
   {
    this.webSiteData.webSiteName=data;
    console.log(this.psid);
    this.passwordService.deleteDataByWebsiteName(data,this.psid).subscribe((data)=>{
      this.dataSource= new MatTableDataSource(data);
      if(data==null)
      {
         this.noData=true;
         this.noDataMessage="No Data is Registered"
      }
    },error=>{
      console.log('in the error response')
      console.log(error)
      this.noData=true;
      this.noDataMessage="No Data is Registered"
    });
   }
 
   onEdit(data)
   {
        let length=this.dataSource.data.length;
        let id='';
        let encryptedpassword=''
        let webSiteName=''
        for(let i=0;i<length;i++)
        {
          if(this.dataSource.data[i].webSiteName==data)
          {
               id=this.dataSource.data[i].id;
               encryptedpassword=this.dataSource.data[i]. encryptedpassword
               webSiteName=this.dataSource.data[i].webSiteName
               break;
          }
        }
        this.resultData.encryptedpassword=encryptedpassword;
        this.resultData.webSiteName=webSiteName;
        this.resultData.id=id;
        this.passwordService.setUpdate(this.resultData);
        this.router.navigate(['/update',id]);
        
   }
   ngOnDestroy()
   {
     this.psidSubscription.unsubscribe();
     this.passwordServiceSubscription.unsubscribe();
   }
}
const emptyData:EncryptedPassword[]=[{encryptedpassword:'',webSiteName:'',id:''}]