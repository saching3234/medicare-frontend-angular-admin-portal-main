import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 res:any;
  constructor(private adminService:UserServicesService,private router:Router,private auth:AuthServiceService) { }

  ngOnInit(): void {
  }

  submit(userReg:any){
    console.log(userReg.value);    
  
   this.adminService.registerUser(userReg.value).subscribe(res=>{
    //saving the response into the class variable
    this.res=res;
    console.log(this.res);
    //saving the token,admin Id, into the local storage
    localStorage.setItem("admintoken",this.res['token']);
    localStorage.setItem("adminId",this.res['adminId']);
    
    localStorage.setItem("isUserLoggedIn","true");
    //set is logged in service variable to true
    this.auth.isLoggedIn=true;
    //navigating the userHome page
    //this.router.navigateByUrl('/userHome');
    this.router.navigate(['./userHome']); 
     },
    err=>{
      let er=err;
      if(er['status']==401)
      alert("Admin Id already registered. Please enter different admin Id");
      else if(er['status']>=500)
      alert("Yor Back end server is not working properly may be server is not ON");   
      else
      alert("Something went wrong. Please try again later");  
    }     
    );   
   }  

}
