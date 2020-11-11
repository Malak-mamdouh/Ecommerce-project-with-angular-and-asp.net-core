import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';
import { BasketService } from '../basket/basket.service';
import { IBasketItem, IBasket, IBasketTotal, Basket } from '../models/basket';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private orderS: OrderService,
              private basketS: BasketService,
              private route: Router) { }

  
  message: string;
  basketId: string;
  messageValidate = {
    firstname: {
      required: 'firstName is required'
    },
    lastname: {
      required: 'LastName is required'
    },
    address: {
      required: 'Address is required'
    },
    city: {
      required: 'City is required'
    },
    phone: {
      required: 'PhoneNumber is required'
    }
  };
  order: Order;
  orderForm: FormGroup;
  ngOnInit(): void {
    this.message = '';
    this.orderForm = this.fb.group({
      firstName: ['' , Validators.required],
      lastName: ['' , Validators.required],
      address: ['' , Validators.required],
      city: ['' , Validators.required],
      phone: ['' , Validators.required]
    });
    this.order = {
      id: 0,
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      phoneNumber: ''
    };
    if (localStorage.getItem('basket_id') !== null){
      this.basketId = localStorage.getItem('basket_id');
    }
  }


  add(){
    this.validateModel();
    console.log(this.order);
    this.orderS.addOrder(this.order , this.basketId).subscribe(x => {
      this.message = 'You have made your order';
    } , err => console.log(err));
    this.basketS.basket = new  BehaviorSubject<IBasket>(null);
    this.basketS.basketTotal = new  BehaviorSubject<IBasketTotal>(null);
    this.route.navigate(['basket']).then(x => {window.location.reload(); });
    localStorage.removeItem('basket_id');
    this.orderForm.reset();
  }
  validateModel(){
    this.order.firstName = this.orderForm.value.firstName;
    this.order.lastName = this.orderForm.value.lastName;
    this.order.address = this.orderForm.value.address;
    this.order.city = this.orderForm.value.city;
    this.order.phoneNumber = this.orderForm.value.phone;
  }


}