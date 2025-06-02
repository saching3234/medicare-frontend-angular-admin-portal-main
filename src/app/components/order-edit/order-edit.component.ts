import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServicesService } from 'src/app/services/category-services.service';
import { OrderServicesService } from 'src/app/services/order-services.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  orderId:any;
  order;any;
  deliveryStatus:any;
  constructor(private route:ActivatedRoute ,private orderService:OrderServicesService,private router:Router) { }

  ngOnInit(): void {  
    
      this. gettingOrder();
      
   }
  
   gettingOrder(){
    //getting the category id from route
    this.route.params.subscribe(params => {
      this.orderId= params['oid'];
      });
      console.log(this.orderId)      
      //fetching the order details from backedn
        this.order=this.orderService.getOrderById(this.orderId).subscribe(res=>{
        this.order=res
        console.log(this.order)
        },
        err=>{
        console.log("error while fetching the order ",err);
       }
        )

   }
  
   



   //method for navigating to the myorders components
   gotoOrdersFun(){
   this.router.navigateByUrl("/myorders")
   }

   //submit method for form submission
   submit(updateOrder){
    console.log("Changed status of orders")
    this.order.deliveryStatus=updateOrder.value.deliveryStatus
    this.orderService.updateDeliveryStatus(this.order).subscribe(res=>{
      alert("Delivery status update successfully")
      this. gettingOrder();
    },err=>{
      console.log("error while updating the delivery status \n",err);
    })
    console.log(this.order);

   }

}
