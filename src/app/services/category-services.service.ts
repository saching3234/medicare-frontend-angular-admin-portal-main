import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServicesService {
  private token;
  private url="http://localhost:8080/api/admin/category/";
  private header2;
  constructor(private http:HttpClient) {
    //getting the locall saved token
    this.token="Bearer"+localStorage.getItem("admintoken");
    this.header2=new HttpHeaders().set('Authorization',this.token).set('content-type', 'application/json');
   }
   
  //method for getting the specific category details
  getCatById(category){    
    let headers=this.header2;
    return this.http.post(this.url+"getCatById",category,{headers:headers});
  }
  //method for getting the all category details
  getAllCat(){    
    let headers=this.header2;
    return this.http.get(this.url+"getCat",{headers:headers});
  }

  //method for saving the category
  saveCat(cat){
    //setting the header adding the token
    let headers=this.header2;
    return this.http.post(this.url+"saveCat",cat,{headers});

  }

  //method for deleting the selected category
  deleteCat(cat){
      //setting the header adding the token
      let headers=this.header2;
      return this.http.post(this.url+"deleteCat",cat,{headers});
  }

  //update method for category updation
  updateCat(cat){
    let headers=this.header2;
    return this.http.put(this.url+"updateCat",cat,{headers});
  }

}
