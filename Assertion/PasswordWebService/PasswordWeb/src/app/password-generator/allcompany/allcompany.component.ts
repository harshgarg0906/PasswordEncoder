import { Component, OnInit,ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { WebPasswordService, EncryptedPassword } from '../web-password.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {PasswordData} from '../generatepassword/generatepassword.component'
import { Router } from '@angular/router';


@Component({
  selector: 'app-allcompany',
  templateUrl: './allcompany.component.html',
  styleUrls: ['./allcompany.component.css']
})
export class AllcompanyComponent implements OnInit,OnDestroy {
  displayedColumns: string[] = ['encryptedpassword', 'webSiteName','edit','delete'];
  dataSource:any = [];
  webSiteData:PasswordData={
    webSiteName:''
  };
   resultData:EncryptedPassword={encryptedpassword:'',webSiteName:'',id:''}
  noDataMessage:string='';
  noData:boolean=false;
   constructor(private passwordService:WebPasswordService,private router:Router){}
   ngOnInit(){
      this.passwordService.getAllData().subscribe((data)=>{
      console.log('in the get subscription')
      console.log(data);
      this.dataSource= new MatTableDataSource(data);
    })

   //  this.dataSource=resultData;
   }

   onDelete(data)
   {
      console.log('in the delete function')
      console.log(data)
      this.webSiteData.webSiteName=data;
      this.passwordService.deleteDataByWebsiteName(data).subscribe((data)=>{
        console.log('after the deletion')
        console.log(data)
        this.dataSource= new MatTableDataSource(data);
        if(data==null)
        {
           this.noData=true;
           this.noDataMessage="No Data is Registered"
        }
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
        // console.log(id)
        // console.log(encryptedpassword)
        // console.log(webSiteName)
        this.resultData.encryptedpassword=encryptedpassword;
        this.resultData.webSiteName=webSiteName;
        this.resultData.id=id;
        this.passwordService.setUpdate(this.resultData);
        this.router.navigate(['/update',id]);
        
   }
   ngOnDestroy()
   {
   }
}
