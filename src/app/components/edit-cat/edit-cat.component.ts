import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryServicesService } from 'src/app/services/category-services.service';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent implements OnInit {
  cat:any
  category={cid:""}

  constructor(private route:ActivatedRoute ,private catService:CategoryServicesService,private router:Router) { }

  ngOnInit(): void {

  
    //getting the category id from route
    this.route.params.subscribe(params => {
      this.category.cid = params['cid'];
      });
      console.log(this.category.cid)

      
      //fetching the product details from backedn
     this.cat=this.catService.getCatById(this.category).subscribe(res=>{
      this.cat=res
      //console.log(this.product)
     },
     err=>{
      console.log("error while fetching the record ",err);
     }
     )
    console.log(this.cat);
  }

  //submit method for updating data  
  submit(editCat){ 
    //setting the updated values to the categroy
    this.cat.cname=editCat.value.cname;
    this.cat.active=editCat.value.active;
    //sending the updated category to the backed for saving purpose
    console.log(this.cat)
    this.catService.updateCat(this.cat).subscribe(res=>{
      alert("Category Updated Successfully");
    },
    err=>{
      alert("Failed to update category");
      console.log(err);
    })
    console.log(editCat.value)
   }

  goBack(){
   this.router.navigateByUrl("/category")
  }
 
}
