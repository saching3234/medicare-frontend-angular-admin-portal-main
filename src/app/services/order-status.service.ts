import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderStatusService {

  private token;
  private url="http://localhost:8080/api/admin/userOrders/";
  private header2;
  constructor(private http:HttpClient) {
    //getting the locall saved token
    this.token="Bearer"+localStorage.getItem("admintoken"); 
    this.header2=new HttpHeaders().set('Authorization',this.token).set('content-type', 'application/json');
   }
 
   //method for getting the all delivery status from backed 
  getAllOrders() {
    let headers = this.header2;
    console.log("called the get all orders")
    return this.http.get(this.url+'getAllDeliveryStatus',{ headers });
  }


  

}
