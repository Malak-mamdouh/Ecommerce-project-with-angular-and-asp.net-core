import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/Category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://localhost:44371/Category/';
  headers = {
    headers: new HttpHeaders({
        'content-type': 'application/json'
    }),
    withCredentials: true,
  };

  Index(): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl + 'GetCategories');
  }
  getcategory(id: number): Observable<Category>{
    return this.http.get<Category>(this.baseUrl + 'GetCategory/' + id);
  }
  IsCategoryExists(name: string){
    return this.http.get(this.baseUrl + 'IsCategoryExists/' + name);
  }
  AddCategory(model: Category): Observable<Category>{
    return this.http.post<Category>(this.baseUrl + 'AddCategory' , model , this.headers).pipe();
  }
  EditCategory(model: Category){
    return this.http.put(this.baseUrl + 'EditCategory' , model , this.headers).pipe();
  }
  DeleteCategory(id: number){
    return this.http.delete(this.baseUrl + 'Delete/' + id , this.headers).pipe();
  }
}
