import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BasketService } from '../../basket/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  constructor(private service: ProductService , private Activeroute: ActivatedRoute,
              private route: Router , 
              private auth: AuthService, 
              private basketS: BasketService) { }

  ngOnInit(): void {
    const id = +this.Activeroute.snapshot.params['id'];
    this.service.show(id).subscribe(x => {
      this.product = x;
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
    this.basketS.addItemToBasket(this.product);
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
