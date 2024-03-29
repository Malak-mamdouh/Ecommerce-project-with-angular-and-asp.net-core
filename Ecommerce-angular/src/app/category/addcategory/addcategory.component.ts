import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/Category';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private service: CategoryService,
              private activeRoute: ActivatedRoute , 
              private toastr: ToastrService) { }

  message: string;
  categoryForm: FormGroup;
  categoryM: Category;
  btntitle: string;
  title: string;
  id: number;
  categoryName: boolean;
  isEditMode: boolean;
  messageValidate = {
    name: {
      required: 'name is required',
      exist: ''
    }
  };
  ngOnInit(): void {
    this.message = '';
    this.isEditMode = false;
    this.categoryName = true;
    this.id = 0;
    this.categoryM = {
      id: 0,
      categoryName: '',
      num_of_products: 0
    };
    this.btntitle = 'Add Category';
    this.categoryForm = this.fb.group({
      categoryName: ['' , Validators.required],
      num_of_products: [0]
    });
    this.activeRoute.paramMap.subscribe(param => {
      const id = +param.get('id');
      if (id){
        this.service.getcategory(id).subscribe(c => {
          this.categoryM = c;
          this.btntitle = 'Edit Category';
          this.isEditMode = true;
          this.AddCategoryData();
        } , err => console.log(err));
      }
    });
  }

  AddCategoryData(){
    if (this.categoryM !== null){
      console.log(this.categoryM);
      this.categoryForm.patchValue({
        categoryName: this.categoryM.categoryName,
        num_of_products: this.categoryM.num_of_products
      });
    }
  }
  IsCategoryNameExist(){
    const name = this.categoryForm.value.categoryName;
    if (name != null && name !== ''){
      this.service.IsCategoryExists(name).subscribe(suc => {
        this.messageValidate.name.exist = 'This Category is already added';
        
        this.categoryName = true;
      }, err => {this.messageValidate.name.exist = '';
                this.categoryName = false;
              });
      return true;
    }
    return false;
  }
  ValidateModel(){
    this.categoryM.categoryName = this.categoryForm.value.categoryName;
    this.categoryM.num_of_products = this.categoryForm.value.num_of_products;
  }
  add(){
    this.ValidateModel();
    if (!this.isEditMode){
      this.service.AddCategory(this.categoryM).subscribe(x => {
        this.message = 'Category has been added successfully';
      } , err => {console.log(err); });
    }
    else{
      this.service.EditCategory(this.categoryM).subscribe(x => {
        this.message = 'Category has been updated successfully';
      });
    }
    this.categoryForm.reset();
  }
}
