import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from './login/login.component';
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface LoginResponsse
{
  statusCode:any
  message:string
}
@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  constructor(private http:HttpClient) { }
  public loginBehaviorSubject=new BehaviorSubject<boolean>(null);
  onLogin(form:UserData)
  {  
      return this.http.post<LoginResponsse>(`http://localhost:8765/user/auth/login`,form)
      .pipe(catchError(errorRes=>{
        let errorMessage='';
        console.log('in the errrorr message')
        console.log(errorRes)
        if(errorRes.status==404)
        {
          errorMessage="PSID Not Found"
        }
        return throwError(errorMessage)
 }));
  }

  getData()
  {
    console.log('in the get service')
    this.http.get('http://localhost:8765/user/auth/data').subscribe(
      (data)=>{

      }
    )
  }

  setLoginBehaviourSubject(data:boolean)
  {
    this.loginBehaviorSubject.next(data);
  }

  getLoginBehaviourSubject()
  {
    return this.loginBehaviorSubject.asObservable();
  }
  
}
