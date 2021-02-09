import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';
import { BasketService } from '../../basket/basket.service';
import { IBasket, IBasketTotal} from '../../models/basket';
import { BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private orderS: OrderService,
              private basketS: BasketService,
              private route: Router,
              private registerService: RegisterService) { }

  
  message: string;
  isBusy: boolean;
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
    },
    email: {
      required: 'Email is required',
      notExist: ''
    }
  };
  order: Order;
  emailExist: boolean;
  orderForm: FormGroup;
  ngOnInit(): void {
    this.isBusy = false;
    this.emailExist = false;
    this.message = '';
    this.orderForm = this.fb.group({
      firstName: ['' , Validators.required],
      lastName: ['' , Validators.required],
      address: ['' , Validators.required],
      city: ['' , Validators.required],
      phone: ['' , Validators.required],
      email: ['' , [Validators.required , Validators.email]]    
    });
    this.order = {
      id: 0,
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      phoneNumber: '',
      email: '',
      cartId: ''
    };
    if (localStorage.getItem('basket_id') !== null){
      this.order.cartId = localStorage.getItem('basket_id');
    }
    this.orderForm.statusChanges.subscribe(success => {
      if(this.orderForm.status == 'VALID'){
        console.log("form valid");
      }
    } , err => console.log(err));
  }


  add(){
    this.validateModel();
    console.log(this.order);
    this.orderS.addOrder(this.order).subscribe(x => {
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
    this.order.email = this.orderForm.value.email;
  }

  EmailNotExist(){
    const email = this.orderForm.value.email;
    this.messageValidate.email.notExist = '';
    if (email != null && email !== ''){
      this.registerService.EmailNotExist(email).subscribe(succ => {
        this.messageValidate.email.notExist = 'You do not have an account';
        this.emailExist = true;
    } , err => {
      this.messageValidate.email.notExist = '';
      this.emailExist = false;
    });
      return true;
    }
    return false;
  }
}
