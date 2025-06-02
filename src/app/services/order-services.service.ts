import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderServicesService {

  private token;
  private url="http://localhost:8080/api/admin/userOrders/";
  private header2;
  constructor(private http:HttpClient) {
    //getting the locall saved token
    this.token="Bearer"+localStorage.getItem("admintoken");
    this.header2=new HttpHeaders().set('Authorization',this.token).set('content-type', 'application/json');
   }

   //method for getting the all orderstatus
   getDeliveryStatus() {
    let headers = this.header2;
    console.log("called the get all orders")
    return this.http.get(this.url+'getAllDeliveryStatus',{ headers });
  }




  //method for getting the current user order details
  getAllOrders() {
    let headers = this.header2;
    console.log("called the get all orders")
    return this.http.get(this.url+'getAllOrders',{ headers });
  }

  //get all users details
  getAllUsers(){
    let headers = this.header2;
    console.log("called the get all users")
    return this.http.get(this.url+'getAllUsers',{ headers });
  }

  getOrderById(oid){
    let headers = this.header2;
    console.log("called the order by id")
    return this.http.get(this.url+'getOrderById/'+oid,{ headers });
  }

  //method for updating the delivery status
  updateDeliveryStatus(order:any){
    let headers = this.header2;
    console.log("called the update delivery status")
    return this.http.put(this.url+'updateDeliveryStatus',order,{ headers });
  }
  



}
