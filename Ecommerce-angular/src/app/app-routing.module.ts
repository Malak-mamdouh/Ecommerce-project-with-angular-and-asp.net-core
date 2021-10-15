import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardGaurdService } from './gaurds/dashboard-gaurd.service';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CanDeactivateGuard } from './gaurds/can-deactivate-guard.service';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { CategoryComponent } from './category/category.component';
import { AddOrderComponent } from './orders/addorder/addorder.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';

const routes: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'home' , component: HomeComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'register' , component: RegisterComponent},
    {path: 'dashboard' , component: DashboardComponent , canActivate: [DashboardGaurdService]},
    {path: 'notFound' , component: NotFoundComponent},
    {path: 'products' , component: ProductsComponent},
    {path: 'product/:id' , component: ProductDetailsComponent},
    {path: 'editproduct/:id' , component: AddproductComponent ,
    canActivate: [DashboardGaurdService] , canDeactivate: [CanDeactivateGuard]},
    {path: 'category' , component: CategoryComponent , canActivate: [DashboardGaurdService]},
    {path: 'dashboard/add-category' , component: AddcategoryComponent , 
    canActivate: [DashboardGaurdService]},
    {path: 'editcategory/:id' , component: AddcategoryComponent , 
    canActivate: [DashboardGaurdService] , canDeactivate: [CanDeactivateGuard]},
    {path: 'basket' , loadChildren: () => import('./basket/basket.module').
    then(mod => mod.BasketModule) },
    {path: 'add-order' , component: AddOrderComponent},
    {path: 'orders' , component: OrdersComponent},
    {path: 'orders/:id' , component: OrderDetailsComponent},
    { path: '**', redirectTo: '/notFound' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
