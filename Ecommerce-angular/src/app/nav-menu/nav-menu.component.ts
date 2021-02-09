import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import { BasketService } from '../basket/basket.service';
import { Observable } from 'rxjs';
import { IBasket } from '../models/basket';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  basket: Observable<IBasket>;
  constructor(private auth: AuthService,
              private  service: RegisterService,
              private route: Router,
              private basketS: BasketService) { }
  title = 'E-Commerce';
  name = '';
  ngOnInit(){
    this.basket = this.basketS.basket;

    if (this.isUserRegistered()){
      if (this.auth.IsExpiredDate(this.auth.expire) === true){
        this.logout();
      }
      this.auth.ValidateUser(this.auth.email , this.auth.role).subscribe(x => {
        console.log('You are authorized');
      } , err => {
        console.log(err);
        this.logout(); });

      this.auth.GetName(this.auth.email).subscribe(x => {
        this.name = x;
      } , err => console.log(err));
    }
  }

  logout(){
    this.service.Logout().subscribe(success => {
      console.log('Not Authorized');
    } , err => console.log(err));
    localStorage.clear();

  }
  
  isAdmin(){
    const admin = !!this.auth.role;
    if (admin){
      if (this.auth.role.toLowerCase() === 'admin'){
        return true;
      }
    }
    return false;
  }
  isUserRegistered(){
    return this.auth.isUserRegistered();
  }
}
