import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket.service';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem } from '../models/basket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: Observable<IBasket>;
  constructor(private basketS: BasketService , private route: Router) { }

  ngOnInit(): void {
    this.basket = this.basketS.basket;
  }

  Show(id: number){
    this.route.navigate(['/product' , id]);
  }
  IncrementItem(item: IBasketItem){
    this.basketS.IncrementItem(item);
  }

  public createImgPath(serverpath: string){
    return `https://localhost:44371/${serverpath}`;
  }
  DecremenItem(item: IBasketItem){
    this.basketS.decrementItem(item);
  }

  RemoveItem(item: IBasketItem){
    this.basketS.RemoveItem(item);
  }

}
