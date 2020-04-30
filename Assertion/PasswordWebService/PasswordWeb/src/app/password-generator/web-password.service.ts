import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
