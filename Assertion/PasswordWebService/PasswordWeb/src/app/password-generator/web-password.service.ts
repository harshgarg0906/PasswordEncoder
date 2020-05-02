import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Subject, Subscription, Observable, BehaviorSubject } from 'rxjs';
export interface EncryptedPassword{
  id?:string
  encryptedpassword:string;
  webSiteName:string;
  duplicate?: boolean
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
    return this.http.post<EncryptedPassword>('http://localhost:8765/generate/save',data)
  }

  getAllData()
  {
    return this.http.get<EncryptedPassword[]>('http://localhost:8765/generate/data');
  }

  deleteDataByWebsiteName(data:string)
  {
    const websiteName:string=data
    let siteParams=new HttpParams()
    siteParams=siteParams.append('websiteName',websiteName);
    return this.http.delete<EncryptedPassword[]>('http://localhost:8765/generate/name',{
      params:siteParams
    });
  }

  setUpdate(data)
  {
    this.updateSubject.next(data)
  }
  getUpdate():Observable<EncryptedPassword>{
    return this.updateSubject.asObservable();
  }

  updateWebsiteData(data:EncryptedPassword)
  {
      return this.http.patch('http://localhost:8765/generate/data',data);
  }
}
