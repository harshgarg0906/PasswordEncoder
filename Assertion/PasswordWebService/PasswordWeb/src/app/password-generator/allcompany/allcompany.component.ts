import { Component, OnInit,ViewChild } from '@angular/core';
import { WebPasswordService, EncryptedPassword } from '../web-password.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

const resultData:EncryptedPassword[]=[];

@Component({
  selector: 'app-allcompany',
  templateUrl: './allcompany.component.html',
  styleUrls: ['./allcompany.component.css']
})
export class AllcompanyComponent implements OnInit {
  displayedColumns: string[] = ['encryptedpassword', 'webSiteName','edit','delete'];
  dataSource = [];
   constructor(private passwordService:WebPasswordService){}
   ngOnInit(){

     this.passwordService.getAllData().subscribe((data)=>{
       console.log('in the get subscription')
       console.log(data);
         data.forEach((internalData)=>{
           console.log(internalData)
           resultData.push(internalData);
         })
       console.log(resultData)
       this.dataSource=resultData;
       console.log(this.dataSource)
     })
    // this.dataSource=resultData;
   }

}
