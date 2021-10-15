import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  constructor(private auth: AuthService,
    private orderService: OrderService) { }

  ngOnInit(): void {
    const email = this.auth.email;
    this.orderService.AllOrders(email).subscribe(list => {
      this.orders = list;
      console.log(this.orders);
    } , err => console.log(err));
  }


}
