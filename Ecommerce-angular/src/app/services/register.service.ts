import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterModel } from '../models/register-model';
import { LoginModel } from '../models/login-model';
import { Observable } from 'rxjs';
import { AuthModel } from '../models/authModel';

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
  };
  Register(reg: RegisterModel){
    return this.http.post( this.baseUrl + 'Register' , reg , this.headers);
  }
  UserLogin(log: LoginModel): Observable<AuthModel>{
    return this.http.post<AuthModel>(this.baseUrl + 'Login' , log);
    /*headers*/
  }
  UserNameExist(name: string){
    return this.http.get(this.baseUrl + 'IsUserExists/' + name);
  }
  EmailExist(email: string){
    return this.http.get(this.baseUrl + 'IsEmailExists?Email=' + email);
  }
  EmailNotExist(email: string){
    return this.http.get(this.baseUrl + 'EmailNotExists?Email=' + email);
  }
  Logout(){
    return this.http.get(this.baseUrl + 'Logout' , {withCredentials: true});
  }
}
