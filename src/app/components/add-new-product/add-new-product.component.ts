import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CategoryServicesService } from 'src/app/services/category-services.service';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {
  productData:any;
  cats:any;
  userFile:any;
  constructor(private catServ:CategoryServicesService,private router:Router,private prodServ:ProductServicesService) { }

  ngOnInit(): void {
    //getting the all available category from backend
    this.catServ.getAllCat().subscribe(res=>{
      this.cats=res;
     console.log(this.cats);
    },
    
    //if any erro comes while fetching the catefory details show the msg
    err=>{
      console.log("Error while fetching the categories : "+err);
      }
    )

  }

  //method for getting the selected image
  onSelectedFile(event:any){
    const file=event.target.files[0];
    this.userFile=file;
    console.log(this.userFile);
  }

  //method for saving the product details in the backend
  submit(addNewProd){
    this.productData=addNewProd.value
       //setting the image name
    this.productData.img_name=this.userFile.name
    const formData=new FormData();
    formData.append("product",JSON.stringify(this.productData));
    formData.append("file",this.userFile);
  
    console.log("form data before submitting : ",formData);  
    
    //calling the service method
    this.prodServ.saveProduct(formData).subscribe(res=>{
      alert("New Product details saved successfully");
      console.log("product details saved ");
    },
    
    err=>{
      if(err.status==500)
      alert("Error Occured While Saving the Product Details result : "+err.error.message);
      console.log("Error while saving the products",err.status);
    }
    );
     }
     
  }

