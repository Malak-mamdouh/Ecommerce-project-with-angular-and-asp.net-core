import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router , private productS: ProductService) { }

  isUserList: boolean;
  isUserRoleList: boolean;
  isCategoryList: boolean;
  isAddCategory: boolean;
  products: Product[];
  isproductList: boolean;
  searchTerm = '';

  ngOnInit() {

    this.isUserList = false;
    this.isCategoryList = false;
    this.isUserRoleList = false;
    this.isAddCategory = false;
    this.isproductList = false;
    // tslint:disable-next-line: only-arrow-functions
    $(document).ready( function() {
        // tslint:disable-next-line: only-arrow-functions
        $('#sidebarCollapse').on('click', function() {
            $('#sidebar').toggleClass('active');
        });
    });
  }

  AllProducts(){
    this.productS.Index(0 , this.searchTerm).subscribe(list => {
      this.products = list;
    } , err => console.log(err));
    this.isUserRoleList = false;
    this.isCategoryList = false;
    this.isUserList = false;
    this.isAddCategory = false;
    return this.isproductList = true;
  }
  addcategory(){
    this.isUserRoleList = false;
    this.isCategoryList = false;
    this.isUserList = false;
    this.isproductList = false;
    return this.isAddCategory = true;
  }
  CheckUser(){
    this.isUserRoleList = false;
    this.isCategoryList = false;
    this.isCategoryList = false;
    this.isproductList = false;
    return this.isUserList = true;
  }

  CheckUserRoleList(){
    this.isUserList = false;
    this.isCategoryList = false;
    this.isCategoryList = false;
    this.isproductList = false;
    return this.isUserRoleList = true;
  }
  CategoryList(){
    this.isUserRoleList = false;
    this.isUserList = false;
    this.isproductList = false;
    this.isCategoryList = false;
    return this.isCategoryList = true;
  }
}
