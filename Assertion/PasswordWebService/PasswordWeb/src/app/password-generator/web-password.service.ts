import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {  Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
export interface EncryptedPassword{
  id?:string
  encryptedpassword:string;
  webSiteName:string;
  duplicate?: boolean;
  psid?:string;
}
@Injectable({
  providedIn: 'root'
})
export class WebPasswordService {

  constructor(private http:HttpClient) { }

  public updateSubject=new BehaviorSubject<EncryptedPassword>(null);

  getPassword(data)
  {
    return this.http.post<EncryptedPassword>('http://localhost:8765/generate/password',data);
  }

  savePassword(data:EncryptedPassword)
  {
    return this.http.post<EncryptedPassword>('http://localhost:8765/generate/save',data)
  }

  getAllData(data:string)
  {
    const psid:string=data
    let psidParams=new HttpParams();
    psidParams=psidParams.append('psid',psid)
    return this.http.get<EncryptedPassword[]>('http://localhost:8765/generate/data',
    {
      params:psidParams
    }).pipe(catchError(errorResponse=>{
      let errorMessage='';
      if(errorResponse.status==404)
      {
        errorMessage="Data Not Found";
      }
      return throwError(errorMessage);
    }));
  }

  deleteDataByWebsiteName(data:string,dataPsid:string)
  {
    const websiteName:string=data
    const psid:string=dataPsid;
    let siteParams=new HttpParams()
    siteParams=siteParams.append('websiteName',websiteName);
    siteParams=siteParams.append('psid',psid);
    return this.http.delete<EncryptedPassword[]>('http://localhost:8765/generate/name',{
      params:siteParams
    }).pipe(catchError(errorResponse=>{
      let errorMessage='';
      if(errorResponse.status==404)
      {
        errorMessage="Data Not Found";
      }
      return throwError(errorMessage);
    }));
  }

  setUpdate(data)
  {
    this.updateSubject.next(data)
  }
  getUpdate():Observable<EncryptedPassword>{
    return this.updateSubject.asObservable();
  }

  updateWebsiteData(data:EncryptedPassword,dataPsid:string)
  {
     const psid:string=dataPsid
     let psidParams=new HttpParams();
     psidParams=psidParams.append('psid',psid)
     return this.http.patch('http://localhost:8765/generate/data',data,{
       params:psidParams
     });
  }
}
