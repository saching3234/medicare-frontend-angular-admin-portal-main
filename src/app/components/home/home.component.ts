import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user= { adminId: '', password: ''};
  res:any;

  constructor(private router:Router,private userService:UserServicesService,private auth:AuthServiceService) { }

  ngOnInit(): void {
  }

  submit(userLogin:any){

   // console.log("User Form now",userLogin.value);
   
  this.user.adminId=userLogin.value.adminId;
  this.user.password=userLogin.value.password; 
   this.userService.checkLogin(this.user).subscribe(res=>{
    //saving the response into the class variable storage
    this.res=res;
    console.log(this.res);
    //saving the token,admin Id, into the local storage
    localStorage.setItem("admintoken",this.res['token']);
    localStorage.setItem("adminId",this.res['adminId']);
    
    localStorage.setItem("isUserLoggedIn","true");
    //set is logged in service variable to true
    //this.auth.isLoggedIn=true;
    //navigating the userHome page
    this.router.navigateByUrl('/userHome');
     },
    err=>{
      let er=err;
      if(er['status']==401)
      alert("Enter Valid adminId and password");
      else
      alert("Yor Back end server is not working properly may be server is not on");   
       }
    );   
   }  

  

}
