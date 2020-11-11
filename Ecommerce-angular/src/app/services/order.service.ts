import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/order';
import { BasketService } from '../basket/basket.service';
import { Observable } from 'rxjs';
import { Basket } from '../models/basket';

@Injectable({
    providedIn: 'root'
})
export class OrderService{

    constructor(private http: HttpClient){}
    baseurl = 'https://localhost:44371/order/';
    headers = {
        headers: new HttpHeaders({
            'content-type': 'application/json'
        }),
        withCredentials: true,
    };
    
    AllOrders(){
       return this.http.get(this.baseurl + 'GetAllOrders' , this.headers);
    }
    getOrder(id: number){
        return this.http.get(this.baseurl + 'GetOrder/' + id , this.headers);
    }
    addOrder(order: Order , id: string){
        return this.http.post(this.baseurl + 'addOrder/' + id , order);
    }
}
