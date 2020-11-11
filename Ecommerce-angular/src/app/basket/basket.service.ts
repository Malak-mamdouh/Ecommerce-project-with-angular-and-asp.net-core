import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { IBasket, Basket, IBasketItem, IBasketTotal } from '../models/basket';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  baseUrl = 'https://localhost:44371/Basket/';
  private basketSource = new BehaviorSubject<IBasket>(null);
  basket = this.basketSource.asObservable();
  private basketTotalSource = new BehaviorSubject<IBasketTotal>(null);
  basketTotal = this.basketTotalSource.asObservable();
  constructor(private http: HttpClient) { }

  getBasket(id: string){
    return this.http.get(this.baseUrl + 'GetBasket/' + id)
    .pipe(map((basket: IBasket) => {
      this.basketSource.next(basket);
      this.CalculateTotal();
    }));
  }
  setBasket(basket: IBasket){
    return this.http.post(this.baseUrl + 'UpdateBasket' , basket).subscribe((b: IBasket) => {
      this.basketSource.next(b);
      this.CalculateTotal();
    } , err => {console.log(err); });
  }
  getCurrentValue(){
    return this.basketSource.value;
  }

  IncrementItem(item: IBasketItem){
    const basket = this.getCurrentValue();
    const index = basket.items.findIndex(b => b.id === item.id);
    basket.items[index].quantity++;
    this.setBasket(basket);
  }

  decrementItem(item: IBasketItem){
    const basket = this.getCurrentValue();
    const index = basket.items.findIndex(b => b.id === item.id);
    if (basket.items[index].quantity > 1) {
      basket.items[index].quantity--;
      this.setBasket(basket);
    }
    else{
      this.RemoveItem(item);
    }
  }

  RemoveItem(item: IBasketItem){
    const basket = this.getCurrentValue();
    if (basket.items.some(b => b.id === item.id)){
      basket.items = basket.items.filter(b => b.id !== item.id);
      if (basket.items.length > 0){
        this.setBasket(basket);
      }
      else{
        this.DeleteBasket(basket);
      }
    }
  }
  DeleteBasket(basket: IBasket){
    return this.http.delete(this.baseUrl + 'Delete/' + basket.id).subscribe(x => {
      this.basketSource.next(null);
      this.basketTotalSource.next(null);
      localStorage.removeItem('basket_id');
    } , err => console.log(err));
  }
  addItemToBasket(item: Product, quantity = 1){
    const itemToAdd: IBasketItem = this.mapProductItemToBasketItem(item , quantity);
    const basket = this.getCurrentValue() ?? this.createBasket();
    /*if(basket === null){
      this.createBasket();
    }*/
    basket.items = this.addOrUpdateItem(basket.items , itemToAdd, quantity);
    this.setBasket(basket);
  }
  mapProductItemToBasketItem(item: Product , quantity: number): IBasketItem{
    return{
      id: item.productId,
      productName: item.productName,
      price: item.price,
      url: item.url,
      quantity
    };
  }
  private createBasket(): IBasket{
    const basket = new Basket();
    localStorage.setItem('basket_id' , basket.id);
    return basket;
  }

  private CalculateTotal(){
    const basket = this.getCurrentValue();
    const shipping = 0;
    const subtotal = basket.items.reduce((a , b) => (b.price * b.quantity) + a, 0);
    const total = shipping + subtotal;
    this.basketTotalSource.next({shipping , subtotal , total});
  }

  private addOrUpdateItem(items: IBasketItem[] , itemToAdd: IBasketItem , quantity: number):
  IBasketItem[]{
    console.log(items);
    const index = items.findIndex(i => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    }else{
      items[index].quantity += quantity;
    }
    return items;
  }
}
