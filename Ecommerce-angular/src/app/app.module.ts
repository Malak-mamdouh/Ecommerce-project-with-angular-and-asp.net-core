import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { HomeComponent } from './home/home.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { UsersComponent } from './Admin/users/users.component';
import { UserRolesComponent } from './Admin/user-roles/user-roles.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { UploadComponent } from './products/addproduct/upload/upload.component';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { DashboardGaurdService } from './gaurds/dashboard-gaurd.service';
import { CanDeactivateGuard } from './gaurds/can-deactivate-guard.service';
import { SharedModule } from './shared/shared.module';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { FilterPipe } from './pipe/filter.pipe';
import { AddOrderComponent } from './orders/addorder/addorder.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterMenuComponent,
    DashboardComponent,
    UsersComponent,
    UserRolesComponent,
    NotFoundComponent,
    AddproductComponent,
    UploadComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    CategoryComponent,
    AddcategoryComponent,
    FilterPipe,
    AddOrderComponent,
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
    SharedModule,
    FormsModule
  ],
  exports: [],
  providers: [DashboardGaurdService , CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
