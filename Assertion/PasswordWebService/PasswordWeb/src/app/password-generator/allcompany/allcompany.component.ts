import { Component, OnInit,ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { WebPasswordService, EncryptedPassword } from '../web-password.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {PasswordData} from '../generatepassword/generatepassword.component'
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-allcompany',
  templateUrl: './allcompany.component.html',
  styleUrls: ['./allcompany.component.css']
})



export class AllcompanyComponent implements OnInit {
  displayedColumns: string[] = ['encryptedpassword', 'webSiteName','edit','delete'];
  dataSource = new MatTableDataSource<EncryptedPassword>(emptyData);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private passwordService:WebPasswordService,private router:Router){}
  ngOnInit() {
  
        console.log('in the init')
   // this.dataSource.paginator=this.paginator;
      this.passwordService.getAllData().subscribe((data)=>{
      console.log('in the get subscription')
      console.log(data);
      this.dataSource= new MatTableDataSource(data);
    
    })
    this.dataSource.paginator = this.paginator;
  //   this.dataSource=new MatTableDataSource(resultData);
  //  this.dataSource.paginator = this.paginator;
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
const emptyData:EncryptedPassword[]=[{encryptedpassword:'e',webSiteName:'fwewe',id:'1'}]