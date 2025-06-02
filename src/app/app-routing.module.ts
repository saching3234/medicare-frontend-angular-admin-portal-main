import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { MyOrdersComponent } from './components/orders/orders.component';
import { AddNewCategoryComponent } from './components/add-new-category/add-new-category.component';
import { ProductsComponent } from './components/products/products.component';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserHomeComponent } from './components/admin-home/admin-home.component';
import { UserProfileComponent } from './components/admin-profile/user-profile.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { CategoryComponent } from './components/category/category.component';
import { EditCatComponent } from './components/edit-cat/edit-cat.component';
import { OrderEditComponent } from './components/order-edit/order-edit.component';

const routes: Routes = [
{path:'' ,component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'addNewProduct', component:AddNewProductComponent},
{path:'userHome',component:UserHomeComponent},
{path:'products',component:ProductsComponent},
{path:'myorders',component:MyOrdersComponent},
{path:'userprofile',component:UserProfileComponent},
{path:'userEdit',component:UserEditComponent},
{path:'editProd/:pid',component:EditProductComponent},
{path:'category',component:CategoryComponent},
{path:'addNewCat',component:AddNewCategoryComponent},
{path:'editCat/:cid',component:EditCatComponent},
{path:'editOrder/:oid',component:OrderEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
