import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/Category';
import { CanComponentDeactivate } from '../../gaurds/can-deactivate-guard.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit , CanComponentDeactivate{

 response: {url: ''};
  productForm: FormGroup;
  product: Product;
  message: string;
  id: number;
  title: string;
  Editurl: string;
  btnTitle: string;
  category: Category;
  categories: Category[];
  isEditMode: boolean;
  urlEdit: string;
  isUpdated: boolean;
  messageValidate = {
    name: {
      required: 'name is required'
    },
    description: {
      required: 'Description is required'
    },
    price: {
      required: 'Price is required'
    },
    category: {
      required: 'Category is required'
    }
  };
  constructor(private fb: FormBuilder,
              private productSer: ProductService,
              private activeRoute: ActivatedRoute,
              private categorySer: CategoryService) { }

  ngOnInit(): void {
    this.isUpdated = false;
    this.isEditMode = false;
    this.id = 0;
    this.categories = null;
    this.btnTitle = 'Add';
    this.title = '';
    this.message = '';
    this.productForm = this.fb.group({
      productName: ['' , Validators.required],
      description: ['' , Validators.required],
      price: ['' , Validators.required],
      categoryId: [0 , Validators.required]
    });
    this.response = {
      url: ''
    };
    this.product = {
      productId: 0,
      productName: '',
      description: '',
      price: 0,
      url: '',
      categoryId: 0
    };

    this.activeRoute.paramMap.subscribe(param => {
      const id = +param.get('id');
      if (id){
        this.id = id;
        this.productSer.show(id).subscribe(x => {
          this.product = x;
          this.isEditMode = true;
         /* const file = this.createImgPath(this.product.url);
          console.log(this.product);*/
          this.urlEdit = this.product.url;
          this.title = 'Edit Product Data';
          this.btnTitle = 'Edit';
          this.Editurl = this.product.url;
          console.log(this.Editurl);
          this.AddProductData();
        } , err => console.log(err));
      }
    });
    this.categorySer.Index().subscribe(list => {
       this.categories = list;
    } , err => console.log(err));

  }

  public createImgPath(serverpath: string){
    return `https://localhost:44371/${serverpath}`;
  }
  AddProductData(){
    if (this.product !== null){
      this.productForm.setValue({
        productName: this.product.productName,
        description: this.product.description,
        price: this.product.price,
        categoryId: this.product.categoryId
      });
    }
  }
  public uploadFinished = (event) => {
    this.response = event;
  }

  CanDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    if (!this.isUpdated){
      return confirm('Do you want to discard the changes?');
    }
    else{
      return true;
    }
  }
  add(){
      this.validateModel();
      console.log(this.product);
      if (!this.isEditMode){
        this.product.url = this.response.url;
        this.productSer.AddProduct(this.product).subscribe(x => {
          this.message = 'Product has been added successfully';
          console.log(x.categoryId);
         /* this.categories.forEach(item => {
            if (item.id === x.categoryId){
              item.num_of_products++;
            }
          });*/
        } , err => console.log(err));
      }
      else{
          if (this.Editurl !== null && this.response.url == ''){
            this.product.url = this.Editurl;
            console.log(this.product.url);
          }
        else{
          this.product.url = this.response.url;
        }
        this.product.productId = this.id;
        console.log(this.product.url);
        this.productSer.updateProduct(this.product).subscribe(x => {
          this.message = 'Product has been Updated successfully';
        } , err => console.log(err));
        this.isUpdated = true;
      }
      this.productForm.reset();

  }

  validateModel(){
    this.product.productName = this.productForm.value.productName;
    this.product.description = this.productForm.value.description;
    this.product.price = this.productForm.value.price;
    // tslint:disable-next-line: radix
    this.product.categoryId = parseInt(this.productForm.value.categoryId);
  }
}
