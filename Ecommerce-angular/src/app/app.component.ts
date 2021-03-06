import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ecommerce';
  constructor(private basketService: BasketService){}

  ngOnInit(){
    const basketId = localStorage.getItem('basket_id');
    if (basketId){
      this.basketService.getBasket(basketId).subscribe(x => {
        console.log('intailize basket');
      } , err => console.log(err));
    }
  }
}
