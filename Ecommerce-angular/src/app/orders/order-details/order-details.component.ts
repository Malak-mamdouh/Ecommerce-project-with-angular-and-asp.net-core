import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';
import { ProductsComponent } from '../../products/products.component';
import { Product } from '../../models/Product';
import { Basket, IBasketItem, IBasket } from '../../models/basket';
import { BasketService } from '../../basket/basket.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  basket: Basket;
  constructor(private activeRoute: ActivatedRoute,
    private orderService: OrderService, 
    private basketS: BasketService , 
    private route: Router) {

     }

  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.params['id'];
     if(id){
        this.orderService.getOrder(id).subscribe(model => {
          this.basket = model;
          
        });
       };
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

}
