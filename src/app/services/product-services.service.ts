import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  private url="http://localhost:8080/api/admin/products/";
  private token;

  constructor(private http:HttpClient) { 
    //getting the locally saved admin token 
    this.token="Bearer"+localStorage.getItem("admintoken");  
  }

  //method for getting the product details of selected category
   getProducts(){ 
        
        console.log(this.token);
        let headers=new HttpHeaders().set('Authorization',this.token);
        return this.http.get(this.url+"getProducts",{headers});
   }
    
   //method for updating the product details
   updateProduct(prodDetails){       
    let headers=new HttpHeaders().set('Authorization',this.token);      
      return this.http.put(this.url+"updateProduct",prodDetails,{headers});       
    }

     //method for updating the product details when image is also changed
   updateProductImg(prodDetails){       
    let headers=new HttpHeaders().set('Authorization',this.token);      
      return this.http.put(this.url+"updateProductImg",prodDetails,{headers});       
    }    

    //method for saving the product details
    saveProduct(prodDetails){       
    let headers=new HttpHeaders().set('Authorization',this.token);      
      return this.http.post(this.url+"saveProduct",prodDetails,{headers});       
    }

    //method for updating the active status
    updateActiveStatusOfProduct(product){       
      let headers=new HttpHeaders().set('Authorization',this.token);      
        return this.http.put(this.url+"updateProduct",product,{headers});       
      }

      //method for getting the product by pid
      getProduct(pid){
 
        let headers=new HttpHeaders().set('Authorization',this.token);      
        return this.http.post(this.url+"getProduct",pid,{headers});


      }


}
