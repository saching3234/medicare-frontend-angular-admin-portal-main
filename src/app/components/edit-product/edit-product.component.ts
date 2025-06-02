import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { CategoryServicesService } from 'src/app/services/category-services.service';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  sub:any
  //object for saving the pid
  pod={pid:""};
  product:any
  cats:any
  userFile:any
  constructor(private router:Router,private route:ActivatedRoute,private productService:ProductServicesService,private catServ:CategoryServicesService) { }

  ngOnInit(): void {
   this.getProduct();
    
  }

  //method for getting the product details
  getProduct(){
    //getting the all available category from backend
    this.catServ.getAllCat().subscribe(res=>{
      this.cats=res;
    // console.log(this.cats);
    },
    
    //if any erro comes while fetching the catefory details show the msg
    err=>{
      console.log("Error while fetching the categories : "+err);
      }
    )
    //getting the product id from route
    this.route.params.subscribe(params => {
      this.pod.pid = params['pid'];
      });

      //fetching the product details from backedn
     this.product=this.productService.getProduct(this.pod).subscribe(res=>{
      this.product=res
      //console.log(this.product)
     },
     err=>{
      console.log("error while fetching the record ",err);
     }
     )
    console.log(this.product);
  }
 
  //method for getting the selected image
  onSelectedFile(event:any){
    const file=event.target.files[0];
    this.userFile=file;
    console.log(this.userFile);
  }

  //method for redirecting to the product page
  goProductFun(){
     this.router.navigateByUrl("/products");
  }

  //method for saving the product details in the backend
  submit(editProd){   
    console.log(editProd.value)
    //saving the value to the local variable
    const tempprod=editProd.value
    //adding the updated values to the product object
    this.product.pname=tempprod.pname;
    this.product.pdescription=tempprod.pdescription;
    this.product.available_quantity=tempprod.available_quantity;
    this.product.cid=tempprod.cid;
    this.product.active=tempprod.active;
    this.product.brand=tempprod.brand;
    this.product.cid=tempprod.cid;
    this.product.price_per_unit=tempprod.price_per_unit;    
    console.log(this.product)
    
     //if image is updated 
    if(this.userFile){
    //creating the form data for multipart request 
      //setting the image name
       this.product.img_name=this.userFile.name
    const formData=new FormData();
    formData.append("product",JSON.stringify(this.product));
    formData.append("file",this.userFile);
      console.log("called the image updated if block")
    console.log(formData);  
    
    //calling the service method
    this.productService.updateProductImg(formData).subscribe(res=>{
      alert("Product details updated successfully");
      //again getting the updated product details from backend
      this.getProduct();
      console.log("product details saved ");
    },
    
    err=>{
      if(err.status==500)
      alert("Please select the image of size greater than 5 kb and less than 1 mb")
      console.log("Error while saving the products",err);
    }
    );
    
  }

  //if image not updated
    else{
      console.log("called the normal block")
    //calling the service method update to save changes in db
    this.productService.updateProduct(this.product).subscribe(res=>{
      alert("Product details updated successfully");
      //agin getting the updated data from the backend
      this.getProduct();
    },
    err=>{
      alert("Error while updating the product details")
      console.log(err);
    }
    )
  }
}

}
