import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Subject, Subscription, Observable, BehaviorSubject } from 'rxjs';
export interface EncryptedPassword{
  id?:string
  encryptedpassword:string;
  webSiteName:string
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

  savePassword(data)
  {
    console.log('in the save service')
    return this.http.post('http://localhost:8765/generate/save',data)
  }

  getAllData()
  {
    return this.http.get<EncryptedPassword[]>('http://localhost:8765/generate/data');
  }

  deleteDataByWebsiteName(data:string)
  {
    console.log('in the delete service')
    console.log(data)
    const websiteName:string=data
    let siteParams=new HttpParams()
    siteParams=siteParams.append('websiteName',websiteName);
    console.log(siteParams)
    return this.http.delete<EncryptedPassword[]>('http://localhost:8765/generate/name',{
      params:siteParams
    });
  }

  setUpdate(data)
  {
    console.log("in the update")
    console.log(data)
    this.updateSubject.next(data)
  }
  getUpdate():Observable<EncryptedPassword>{
    console.log('in the getUpdate')
    return this.updateSubject.asObservable();
  }
}
