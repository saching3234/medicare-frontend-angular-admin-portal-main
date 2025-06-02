import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 user:any;
 adminId=localStorage.getItem("adminId");

  constructor(private userSrevice:UserServicesService,private router:Router) { }

  ngOnInit(): void {
   

  }

}
