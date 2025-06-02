import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-user-home-header',
  templateUrl: './admin-home-header.component.html',
  styleUrls: ['./admin-home-header.component.css']
})
export class UserHomeHeaderComponent implements OnInit {
  adminId=localStorage.getItem("adminId");

  constructor(private route: Router,private auth :AuthServiceService) { }

  ngOnInit(): void {
  }

  logOut(){
  localStorage.clear();
  this.auth.isLoggedIn=false;
  alert("called logout");
  this.route.navigate(["/"]);
   
  }

}
