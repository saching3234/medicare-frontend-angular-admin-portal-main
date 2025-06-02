import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderServicesService } from 'src/app/services/order-services.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders:any;
  users:any;
  

  constructor(private ordeService:OrderServicesService) { }

  ngOnInit(): void {
    //getting the all product from the backend
    this.ordeService.getAllOrders().subscribe(res=>{
      this.orders=res
      console.log(this.orders)
    },err=>{
      console.log("Error while fetching the orders: ",err);
    })     
 
  }

 //search order by brand name
 searchByBrand(txtBName){
  console.log(txtBName.value);  
   let tempOrder:Array<any>=[];
  for(let order of this.orders){
    if(order.brand==txtBName.value)
    tempOrder.push(order)
    
  } 
  this.orders=tempOrder;
  //for(let order of tempOrder ){ 
 //}
}


//search order by Order id
searchByOid(OrderId){
  console.log(OrderId.value)
  let tempOrder:Array<any>=[];
  for(let order of this.orders){
    if(order.orderId==OrderId.value)
    tempOrder.push(order)    
  }
  this.orders=tempOrder;
}



}
