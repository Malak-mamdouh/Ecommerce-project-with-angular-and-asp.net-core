import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserRoleModel } from '../models/userRoleModel';
import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
  })

export class AdminService{

    constructor(private http: HttpClient , private auth: AuthService){}

    baseUrl = 'https://localhost:44371/Admin/';
    headers = {
        headers: new HttpHeaders({
            'content-type': 'application/json'
        }),
        withCredentials: true,
    };

    GetAllUsers(): Observable<User[]>{
        return this.http.get<User[]>(this.baseUrl + 'GetAllUsers' , this.headers);
    }

    GetUserRole(): Observable<UserRoleModel[]> {
        return this.http.get<UserRoleModel[]>(this.baseUrl + 'GetUserRole' , this.headers).pipe();
      }

      isAdmin(){
        const admin = !!this.auth.role;
        if (admin){
          if (this.auth.role.toLowerCase() === 'admin'){
            return true;
          }
        }
        return false;
      }
}
