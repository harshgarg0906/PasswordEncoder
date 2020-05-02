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
export interface SignUpResponse
{
  psid:string,
  email:string,
  password:string
  exist:boolean,
  userActive:any
  userRole:any
}
@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  constructor(private http:HttpClient) { }
  public loginBehaviorSubject=new BehaviorSubject<boolean>(null);
  public psidBehaviourSubject=new BehaviorSubject<string>(null);
  onLogin(form:UserData)
  {  
      return this.http.post<LoginResponsse>(`http://localhost:8765/user/auth/login`,form)
      .pipe(catchError(errorRes=>{
        let errorMessage='';
        if(errorRes.status==404)
        {
          errorMessage="PSID Not Found"
        }
        return throwError(errorMessage)
 }));
  }

  getData()
  {
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


  logout()
  {
    return this.http.get(`http://localhost:8765/user/auth/logout`);
  }
  
  onSingUp(data:UserData)
  {
    console.log('in te signup')
    return this.http.post<SignUpResponse>(`http://localhost:8765/user/signup`,data)
  }

  setPsidBehaviourSubject(data:string)
  {
    this.psidBehaviourSubject.next(data);
  }

  getPsidBehaviourSubject()
  {
    return this.psidBehaviourSubject.asObservable();
  }
}
