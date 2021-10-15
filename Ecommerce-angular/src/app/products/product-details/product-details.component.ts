import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BasketService } from '../../basket/basket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  notAvailable = false;
  isLoading: boolean;
  constructor(private service: ProductService , private Activeroute: ActivatedRoute,
              private route: Router , 
              private auth: AuthService, 
              private basketS: BasketService , 
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.isLoading = true;
    const id = +this.Activeroute.snapshot.params['id'];
    this.service.show(id).subscribe(x => {
      this.product = x;
      this.isLoading = false;
    } , err => console.log(err));
  }

  onDelete(id){
    const alert = confirm('Do you delete this Product?');
    if (alert === true){
      this.service.delete(id).subscribe(s => {
        this.route.navigate(['/products']);
      } , err => console.log(err));
    }
  }

  addItemToCart(){
    if(this.product.amount > 0){
      this.basketS.addItemToBasket(this.product);
    }else{
      this.toastr.error('This Product is not available now' , 'Not Available' , 
      {
        timeOut: 2000
      });
    }
  }

  EditProductClick(id){
    this.route.navigate(['/editproduct' , id]);
  }
  public createImgPath(serverpath: string){
    return `https://localhost:44371/${serverpath}`;
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
}
