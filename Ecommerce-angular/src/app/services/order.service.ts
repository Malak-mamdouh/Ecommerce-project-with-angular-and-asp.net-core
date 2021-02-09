import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/order';
import { BasketService } from '../basket/basket.service';
import { Observable } from 'rxjs';
import { Basket } from '../models/basket';
import { Product } from '../models/Product';

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

    AllOrders(email: string): Observable<Order[]>{
       return this.http.get<Order[]>(this.baseurl + 'GetOrders/' + email , this.headers);
    }
    getOrder(id: number): Observable<Basket>{
        return this.http.get<Basket>(this.baseurl + 'GetOrder/' + id , this.headers);
    }
    addOrder(order: Order){
        return this.http.post(this.baseurl + 'addOrder/', order);
    }
}
