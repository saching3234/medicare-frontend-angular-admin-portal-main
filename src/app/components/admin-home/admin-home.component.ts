import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryServicesService } from 'src/app/services/category-services.service';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class UserHomeComponent implements OnInit {
token:any;
adminId:any;

categories:any;

 constructor(private catSer:CategoryServicesService,private router:Router) { }

  ngOnInit(): void {
   this.token= localStorage.getItem("admintoken");
   //navigate to login page if token is empty
   if(this.token==null){
    this.router.navigate(['/']);
   }
    this.adminId=localStorage.getItem("adminId");
   
    //getting all available categories
    //this.getCat(); 
  }

  getCat(){
    this.catSer.getAllCat().subscribe(res=>{
      //saving the all categories into the property
      this.categories=res;
     console.log(this.categories);
    },
    err=>{
      //if the token is not valid redirect to login page
      if(err.error.status==403){
      alert("something went wrong\n "+err.error.message);
      //clearing the local storage
      localStorage.clear();
       this.router.navigate(['/']);
      }
      else
      alert("Your Back End server may be  offline")
    })
  console.log();
  }
  






}
