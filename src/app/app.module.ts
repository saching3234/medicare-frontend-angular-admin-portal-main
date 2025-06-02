import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserServicesService } from './services/user-services.service';
import { UserHomeComponent } from './components/admin-home/admin-home.component';
import { UserHomeHeaderComponent } from './components/admin-home-header/admin-home-header.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { CategoryServicesService } from './services/category-services.service';
import { MyOrdersComponent } from './components/orders/orders.component';
import { UserProfileComponent } from './components/admin-profile/user-profile.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductsComponent } from './components/products/products.component';
import { AddNewCategoryComponent } from './components/add-new-category/add-new-category.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { EditCatComponent } from './components/edit-cat/edit-cat.component';
import { OrderEditComponent } from './components/order-edit/order-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    AddNewProductComponent,
    UserHomeComponent,
    UserHomeHeaderComponent,
    HomeHeaderComponent,
    MyOrdersComponent,
    UserProfileComponent,
    CategoryComponent,
    ProductsComponent,
    AddNewCategoryComponent,
    PaymentSuccessComponent,
    UserEditComponent,
    EditProductComponent,
    EditCatComponent,
    OrderEditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [UserServicesService,CategoryServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
