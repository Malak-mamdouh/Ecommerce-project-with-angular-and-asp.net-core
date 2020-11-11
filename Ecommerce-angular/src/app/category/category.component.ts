import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private service: CategoryService) { }

  @Input() search = '';
  categoryList: Category[];
  message: string;
  ngOnInit(): void {
    this.categoryList = null;
    this.message = '';
    this.GetCategories();
  }
  GetCategories(){
    this.service.Index().subscribe(list => {
      this.categoryList = list;
    } , err => console.log(err));
  }
  onDelete(id){
    const alert = confirm('Do you delete this category?');
    if (alert === true){
      this.service.DeleteCategory(id).subscribe(s => {
        location.reload();
      } , err => console.log(err));
    }
  }

}
