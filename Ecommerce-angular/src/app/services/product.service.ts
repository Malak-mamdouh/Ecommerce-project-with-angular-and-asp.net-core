import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'https://localhost:44371/Product/';
  headers = {
    headers: new HttpHeaders({
        'content-type': 'application/json'
    }),
    withCredentials: true,
  };
  constructor(private http: HttpClient) { }

  AddProduct(model: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl + 'AddProduct' , model , this.headers);
  }
  show(id): Observable<Product>{
    return this.http.get<Product>(this.baseUrl + 'GetProduct/' + id).pipe();
  }
  Index(id?: number , search?: string): Observable<Product[]>{

    if (id){
      return this.http.get<Product[]>(this.baseUrl + 'GetAllProducts?id=' + id);
    }
    if (search === null){
      return this.http.get<Product[]>(this.baseUrl + 'GetAllProducts');
    }
    return this.http.get<Product[]>(this.baseUrl + 'GetAllProducts?search=' + search);
  }
  delete(id){
    return this.http.delete(this.baseUrl + 'Delete/' + id , {withCredentials: true}).pipe();
  }
  updateProduct(model: Product): Observable<Product>{
    return this.http.put<Product>(this.baseUrl + 'EditProduct' , model , this.headers).pipe();
  }
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44371/${serverPath}`;
  }
}
