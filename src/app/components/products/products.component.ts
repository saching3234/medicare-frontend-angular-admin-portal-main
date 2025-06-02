import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServicesService } from 'src/app/services/cart-services.service';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  
  constructor(private  activatedroute:ActivatedRoute,private route:Router ,private productService:ProductServicesService) { }

  ngOnInit(): void {
    //getting the all products in db
    this.productService.getProducts().subscribe(res=>{
      this.products=res;
     console.log(this.products)  
    },
    err=>{
      console.log(err);
    }
    )   
  }

  //function for searching the product by name
  funSearchProd(txtPName){
      
   let tempProd:Array<any>=[];
  for(let prod of this.products){
    if(prod.pname==txtPName.value)
    tempProd.push(prod)
    
  } 
  this.products=tempProd;
  }

  //function for search product by product id
  funSearchPordById(txtPId){
    let tempProd:Array<any>=[];
  for(let prod of this.products){
    if(prod.pid==txtPId.value)
    tempProd.push(prod)
    
  } 
  this.products=tempProd;
  }
    
  



  //change active status function
  changeActive(product,event){   
    product.active=event.target.checked;
    console.log(product);
    this.productService.updateActiveStatusOfProduct(product).subscribe(res=>{
      alert("Product active status updated successfully")
    },err=>{
      console.log("Error while updating active status \n",err)
    })
  }

  //method for adding the new product redirecting to addNewProduct component
  addNewProd(){
    alert("Add product method called");
    this.route.navigateByUrl("/addNewProduct");
  }

  //edit method for product updation
  editProd(product){
    alert("Called the edit ");
    console.log(product);
   // this.route.("/editProd",product.pid);
  }

}
