import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryServicesService } from 'src/app/services/category-services.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cats:any;

 
  constructor(private catServ:CategoryServicesService,private router:Router) { }

  ngOnInit(): void {
    this.getCat();
}

getCat(){
   //getting the all available category from backend
   this.catServ.getAllCat().subscribe(res=>{
    this.cats=res;
   console.log(this.cats);
});
}

  changeActive(cat,$event){

  }
  addNewCat(){
   this.router.navigateByUrl("/addNewCat");
  }

  


//search category by name
searchByCat(txtCName){
  console.log(txtCName.value);  
   let tempCat:Array<any>=[];
  for(let cat of this.cats){
    if(cat.cname==txtCName.value)
    tempCat.push(cat)
    
  } 
  this.cats=tempCat;
  //for(let order of tempOrder ){ 
 //}
}


//search category by id
searchByCid(cId){
  console.log(cId.value)
  let tempOrder:Array<any>=[];
  for(let cat of this.cats){
    if(cat.cid==cId.value)
    tempOrder.push(cat)    
  }
  this.cats=tempOrder;
}





  //method for deleting the selected category
  deleteCat(cat){
    this.catServ.deleteCat(cat).subscribe(res=>{
      alert("category deleted successfully");
      this.getCat();
    },err=>{
      if(err.status==400){
      alert("category in use. You can not delete now"); 
     
    }
      else{
      alert("Something bad happend at backend side see the console")
      console.log(err);}

    })
    //alert(cat.cid);
  }

}
