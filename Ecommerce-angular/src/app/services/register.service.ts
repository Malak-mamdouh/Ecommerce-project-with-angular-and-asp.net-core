import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterModel } from '../models/register-model';
import { LoginModel } from '../models/login-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://localhost:44371/Account/';
  headers = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    }),
    withCredentials: true,
  };
  Register(reg: RegisterModel){
    return this.http.post( this.baseUrl + 'Register' , reg , this.headers).pipe();
  }
  UserLogin(log: LoginModel){
    return this.http.post(this.baseUrl + 'Login' , log , {responseType: 'text' ,
    withCredentials: true });
    /*headers*/
  }
  UserNameExist(name: string){
    return this.http.get(this.baseUrl + 'IsUserExists?userName=' + name).pipe();
  }
  EmailExist(email: string){
    return this.http.get(this.baseUrl + 'IsEmailExists?Email=' + email).pipe();
  }
  Logout(){
    return this.http.get(this.baseUrl + 'Logout' , {withCredentials: true}).pipe();
  }
}
