import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/Category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private service: ProductService,
              private categoryS: CategoryService) { }

  @ViewChild('search') SearchProduct: ElementRef;
  products: Product[];
  categoryList: Category[];
  searchTerm: string;
  SelectedId = 0;


  ngOnInit(): void {
    this.searchTerm = '';
    this.GetProducts();
    this.GetCategories();
  }

  
  GetProducts(){
    this.service.Index(this.SelectedId , this.searchTerm).subscribe(list => {
      this.products = list;
    }, err => console.log(err));
  }
  GetCategories(){
    this.categoryS.Index().subscribe(list => {
      this.categoryList = [{id: 0, categoryName: 'All' , num_of_products: 5} , ...list];
    } , err => console.log(err));
  }
  OnFilter(id: number){
    this.SelectedId = id;
    if (id !== 0){
      this.searchTerm = '';
    }
    this.GetProducts();
  }
  onSearch(){
    this.searchTerm = this.SearchProduct.nativeElement.value;
    this.GetProducts();
  }
  onReset(){
    this.SearchProduct.nativeElement.value = '';
    this.searchTerm = '';
    this.SelectedId = 0;
    this.GetProducts();
  }
}
