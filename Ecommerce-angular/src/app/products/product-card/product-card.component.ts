import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { BasketService } from '../../basket/basket.service';
import { AdminService } from '../../services/Admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() prod: Product;
  products: Product[];
  single: Product;
  notAvailable: boolean;
  
  constructor(private service: ProductService,
              private route: Router,
              private basketS: BasketService ,
              private admin: AdminService , 
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.notAvailable = false;
  }

  IsAdmin(){
   return this.admin.isAdmin();
  }

  addItemToCart(){
    if(this.prod.amount > 0){
      this.basketS.addItemToBasket(this.prod);
    }else{
      this.toastr.error('This Product is not available now' , 'Not Available' , {
        timeOut: 2000
      });
    }
  }
  
  public createImgPath = (serverpath: string) => {
    return `https://localhost:44371/${serverpath}`;
  }
  onShow(id){
    this.service.show(id).subscribe(response => {
      this.single = response;
    }); }
}
