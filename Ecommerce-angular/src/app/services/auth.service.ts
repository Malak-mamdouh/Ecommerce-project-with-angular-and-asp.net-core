import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CryptService } from './crypt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email: string;
  role: string;
  expire: string;
  token: string;
  baseUrl = 'https://localhost:44371/Account/';

  constructor(private http: HttpClient,
              private crypt: CryptService)
    {

      if (this.isUserRegistered()){
        this.email = this.crypt.Decrypt(localStorage.getItem('Email'));
        this.expire = this.crypt.Decrypt(localStorage.getItem('Expire'));
        this.role =  this.crypt.Decrypt(localStorage.getItem('Role'));
        this.token = localStorage.getItem('token');
      }
  }


  installStorage(rem: boolean , Email: string , role: string , token: string){
    const day = new Date();
    if (rem){
      day.setDate(day.getDate() + 10);
    }
    else{
      day.setMinutes(day.getMinutes() + 1);
    }
    console.log(role);
    localStorage.setItem('Email' , this.crypt.Encrypt(Email));
    localStorage.setItem('Expire' , this.crypt.Encrypt(day.toString()));
    localStorage.setItem('Role' , this.crypt.Encrypt(role));
    localStorage.setItem('token' , token);
    /*this.GetRoleName(Email).subscribe(succ => {
      localStorage.setItem('Role' , succ);
      } , err => console.log(err));*/
  }

  IsExpiredDate(day: string){
    const dateNow = new Date();
    const expiredDate = new Date(Date.parse(day));
    if (expiredDate < dateNow){
      return true;
    }
    return false;
  }

  isUserRegistered(){
    const email = !!localStorage.getItem('Email');
    const role = !!localStorage.getItem('Role');
    const expire = !!localStorage.getItem('Expire');
    const token = !!localStorage.getItem('token');
    if (email && role && expire && token){
      return true;
    }else{
      return false;
    }
  }
  GetName(email: string){
    return this.http.get( this.baseUrl + 'GetName/' + email , {responseType: 'text'});
  }
  ValidateUser(email: string , role: string){
    return this.http.get(this.baseUrl + 'CheckUserClaims/' + email + '&' + role ,
    {withCredentials: true}).pipe();
  }
}
